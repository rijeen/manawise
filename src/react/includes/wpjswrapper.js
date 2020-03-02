import WPJSApi from 'wordpress-js-api-wrapper';

import { CONFIG } from '../app/config';

let wpOptions = null;
if (CONFIG.API.REQUIRE_AUTH) {
	wpOptions = {
		beforeSend: (req) => {
			req.withCredentials = "true";
			req.setRequestHeader("Authorization", "Basic " + btoa(CONFIG.API.USERNAME+":"+CONFIG.API.PASSWORD));
			return req;
		}
	}
}

WPJSApi.init(CONFIG.API.URL, wpOptions);

export default WPJSApi;