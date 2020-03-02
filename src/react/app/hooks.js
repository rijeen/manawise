
//Custom loading hooks
export const customHooks = {

	// Do something before page is loaded
	// args = { params, hash, query }
	// return false to abort loading
	onBeforeLoadingPage: (dispatch, args, page) => {
		return true;
	},

	// Do something after page has loaded
	// args = { params, hash, query }
	onSuccessLoadingPage: (dispatch, args, page) => {

	},

	// Do something when page is not found
	// args = { params, hash, query }
	onNotFoundLoadingPage: (dispatch, args, page) => {
		page.title = 'Sidan kan inte hittas';
		page.slug = '404';
		page.template = '404';
		page.meta_seo = {
			title: 'Sidan finns inte',
			description: 'Sidan finns inte'
		}
	},

	onSettingsLoaded: (dispatch, rsp) => {

	}
};


