import { CONFIG } from './app/config';
import { store } from "./app/store";
import { customHooks } from "./app/hooks";
import WPJSApi from './includes/wpjswrapper';

let WPJSApiSettings = WPJSApi.create('custom', 'settings');

export const getPage = (dispatch, params, hash, query) => {

	let callback = () => {

		let page = PageHelper.create();

		let getParams = getUrlVars();

		let search = getSearchSlug(params);
		let isPreviewMode = getParams['preview'];

		let cachedPages = store.getState().pagePasswordState.pages;
		if (cachedPages) {
			let cacheIndex = cachedPages.map(page => page.slug).indexOf(search);
			if (cacheIndex >= 0) {
				params.id = cachedPages[cacheIndex].id;
				query = { password:  cachedPages[cacheIndex].password }
			}
		}

		let preloadedPage = getPreloadedPage(search);
		if (preloadedPage !== null && !isPreviewMode) {
			dispatch({
				type: 'PAGE_PRE_LOADED',
				page: {
					loaded: false,
					title: preloadedPage.title,
					template: PageHelper.cleanTemplateName(preloadedPage.template),
					fields: preloadedPage.fields,
					custom: preloadedPage.custom
				},
				head: {
					title: getPageTitle(preloadedPage.title),
					description: getPageDescription(preloadedPage.description)
				}
			})
		} else if (!params.id) {
			dispatch({
				type: 'PAGE_LOADING'
			})
		}

		dispatch({
			type: 'MENU_CURRENT',
		});

		let endpoint = WPJSApi.Pages;
		let req = {
			slug: search
		};

		if (params.sub) {
			CONFIG.customPostTypes.forEach((cpt) => {
				if (params.page == cpt.rewrite) {
					endpoint = WPJSApi.create('wp', cpt.endpoint ? cpt.endpoint : cpt.type);
					page.type = cpt.type;
				}
			})
		}

		let request = null;

		if (params.id) {
			request = WPJSApi.Pages.get(params.id, query);
		} else {
			request = endpoint.list(req);
		}


		if (isPreviewMode) {
			let preparation = preparePreviewRequest(getParams, page);
			if (preparation) {
				request = preparation.request;
				page = preparation.page;
			}
		}

		//Args for custom code
		let args = {
			params: params,
			hash: hash,
			query: query
		};

		if (!customHooks.onBeforeLoadingPage(dispatch, args, page)) return;

		request.then((rsp) => {

			page.loaded = true;
			if (rsp.length > 0 || params.id) {
				let response_object = params.id ? rsp : rsp[0];
				page = PageHelper.prepare(response_object, page);

				//If protected content, remove it.
				if (response_object.content.protected && !params.id) {
					page = PageHelper.protect(page);
				}

				customHooks.onSuccessLoadingPage(dispatch, args, page);
			} else if (rsp.length == 0) {
				customHooks.onNotFoundLoadingPage(dispatch, args, page);
			}

			dispatch({
				type: 'PAGE_LOADED',
				page: page,
				head: {
					title: getPageTitle(page.meta_seo.title),
					description: getPageDescription(page.meta_seo.description)
				}
			});

			//Enable revisions
			if (isPreviewMode) {
				dispatch({
					type: 'PAGE_REVISIONS_LOADED',
					revisions: rsp,
					revision: 0
				})
			}

			if (hash) {
				scrollToElementByHash(hash);
			}

		})

	};

	if (store.getState().generalState.general) {
		callback();
	} else {
		loadConfig(store.dispatch, callback);
	}
};

export const getProtectedPage = (params, query) => {

	let page = store.getState().pageState.page;

	let dispatch = store.dispatch;

	if (query.password) {

		dispatch({
			type: 'PAGE_LOADING'
		});

		WPJSApi.Pages.get(params.id, { password: query.password }).then((rsp) => {

			page.loaded = true;

			dispatch({
				type: 'PAGE_PASSWORD_SET',
				id: params.id,
				slug: rsp.slug,
				password: query.password
			});

			page = PageHelper.prepare(rsp, page);

			dispatch({
				type: 'PAGE_LOADED',
				page: page
			})

		}).catch((e) => {
			dispatch({
				type: 'PAGE_LOADED',
				page: page
			})
		})
	}
};

export const getPageTitle = (title) => {
	return CONFIG.titleFormat
		.replace('{website}', store.getState().generalState.general.title)
		.replace('{page_title}', title);
};

export const getPageDescription = (desc) => {
	return desc ? desc : store.getState().generalState.general.description;
};

export const loadConfig = (dispatch, cb) => {

	WPJSApiSettings.list({ enableSitemap: CONFIG.enableSitemap ? 1 : 0 }).then((rsp) => {
		dispatch({
			type: 'GENERAL_LOADED',
			general: rsp.general,
			sitemap: rsp.sitemap ? rsp.sitemap : []
		});

		CONFIG.defaultPageSlug = rsp.config.defaultPageSlug;
		CONFIG.customPostTypes = rsp.config.cpt;

		dispatch({
			type: 'MENUS_LOADED',
			menus: rsp.menus
		});

		customHooks.onSettingsLoaded(dispatch, rsp);

		if (cb) {
			cb();
		}
	})

};

const getPreloadedPage = (search) => {
	let sitemap = [];

	if (store.getState().generalState.sitemap) {
		sitemap = store.getState().generalState.sitemap;
	}

	let index = sitemap.map((page) => {
		return page.slug;
	}).indexOf(search);

	return index >= 0 ? sitemap[index] : null;
};

const PageHelper = {
	create: () => {
		return {
			title: '',
			slug: '',
			template: '',
			content: '',
			meta_seo: null,
			protected: false,
			type: 'page',
			fields: {},
			custom: {}
		}
	},
	prepare: (rsp, page) => {
		page.id = rsp.id;
		page.title = rsp.title.rendered;
		page.template = rsp.template ? PageHelper.cleanTemplateName(rsp.template) : null;
		page.content = rsp.content.rendered;
		page.meta_seo = rsp.meta_seo;
		page.fields = rsp.fields ? rsp.fields : {};
		page.custom = rsp.custom ? rsp.custom : {};
		page.protected = false;

		if (page.type !== 'page') {
			page.template = page.type+'-single';
		}

		if (rsp.is_front_page) {
			page.template = 'index';
		}

		return page;
	},
	protect: (page) => {
		page.protected = true;
		page.content = null;
		page.fields = {};
		page.custom = {};
		return page;
	},
	cleanTemplateName: (template) => {
		return template.replace("template-", "").replace(".php", "")
	}
};

const preparePreviewRequest = (page) => {

	if (typeof _nonce !== 'undefined') {

		let preview_id = getParams['p'];
		if (getParams['id']) {
			preview_id = getParams['id'];
		}
		if (getParams['page_id']) {
			preview_id = getParams['page_id'];
		}
		if (getParams['preview_id']) {
			preview_id = getParams['preview_id'];
		}

		let WPJSApiRevisions = WPJSApi.create('wp', 'pages/'+preview_id+'/revisions', 'v2');
		if (getParams['type'] == 'post') {
			WPJSApiRevisions = WPJSApi.create('wp', 'posts/'+preview_id+'/revisions', 'v2');
			page.type = 'post';
		} else if (getParams['type']) {
			WPJSApiRevisions = WPJSApi.create('wp', getParams['type']+'/'+preview_id+'/revisions', 'v2');
			page.type = getParams['type'];
		}

		return {
			request: WPJSApiRevisions.list({'_wpnonce' : _nonce}),
			page: page
		};
	}

	console.error('Trying to get page revisions but no auth token, must run inside wp environment.');
	return null;
};

const getSearchSlug = (params) => {
	let search = CONFIG.defaultPageSlug;
	if (params.page) {
		search = params.page;
	}
	if (params.sub) {
		search = params.sub;
	}
	if (params.sub2) {
		search = params.sub2;
	}
	if (params.sub3) {
		search = params.sub3;
	}
	if (params.sub4) {
		search = params.sub4;
	}
	return search;
};

const scrollToElementByHash = (hash) => {
	setTimeout(() => {
		let element = document.getElementById(hash.replace('#', ''));
		if (element) {
			window.scrollTo(0, element.getBoundingClientRect().top);
		}
	}, 50)
};

const getUrlVars = () => {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
};
