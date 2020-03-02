export const generalState = (state = {}, action) => {
	switch (action.type) {
		case 'GENERAL_LOADED':
			return { ...state, general: action.general,	sitemap: action.sitemap };
		default:
			return state;
	}
};

export const pageState = (state = {}, action) => {
	switch (action.type) {
		case 'PAGE_PRE_LOADED':
		case 'PAGE_LOADED':
			return { ...state, page: action.page, head: action.head, revisions: null, revision: null };
		case 'PAGE_LOADING':
			return { ...state, page: null };
		case 'PAGE_HEAD':
			return { ...state, head: action.head };
		case 'PAGE_REVISIONS_LOADED':
			return { ...state, revisions: action.revisions, revision: action.revision };
		case 'PAGE_REVISION_SET':
			return { ...state, revision: action.revision };
		default:
			return state;
	}
};

export const menuState = (state = {}, action) => {
	switch (action.type) {
		case 'MENUS_LOADED':
			return { ...state, menus: action.menus };
		case 'MENU_LOADED':
			return { ...state, items: action.items };
		case 'MENU_CURRENT':
			return { ...state, current: action.current, menu_toggled: false };
		case 'MENU_TOGGLED':
			return { ...state, menu_toggled: !state.menu_toggled };
		default:
			return state;
	}
};

export const pagePasswordState = (state = {}, action) => {
	switch (action.type) {
		case 'PAGE_PASSWORD_SET':

			let pages = [];
			if (state.pages) {
				pages = state.pages;
			}

			let index = pages.map(page => page.slug).indexOf(action.slug);

			if (index < 0) {
				pages = pages.concat([{ slug: action.slug, password: action.password, id: action.id  }]);
			}

			return { ...state, pages: pages };
		default:
			return state;
	}
};