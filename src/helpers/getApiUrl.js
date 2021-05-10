const getBaseUrl = () => {
	let BASE_URL;

	switch (process.env.NODE_ENV) {
		case "development":
			BASE_URL = process.env.REACT_APP_DEV_API_URL;
			break;
		case "production":
			BASE_URL = process.env.REACT_APP_PROD_API_URL;
			break;
		case "test":
			BASE_URL = process.env.REACT_APP_DEV_API_URL;
			break;
		default:
			BASE_URL = process.env.REACT_APP_DEV_API_URL;
	}

	return BASE_URL;
};

export default getBaseUrl;
