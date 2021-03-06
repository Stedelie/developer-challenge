import axios from "axios";
import * as actions from "store/api";

import getBaseUrl from "helpers/getApiUrl";

const api = ({ dispatch }) => (next) => async (action) => {
	if (action.type !== actions.apiCallBegan.type) return next(action);

	const { url, method, data, onStart, onSuccess, onError } = action.payload;

	if (onStart) dispatch({ type: onStart });

	next(action);

	try {
		const response = await axios.request({
			baseURL: getBaseUrl(),
			url,
			method,
			data,
		});

		dispatch(actions.apiCallSuccess(response.data));

		if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
	} catch (error) {
        // for general errors
		dispatch(actions.apiCallFailed(error.message));

        // for specific errors
		if (onError)
			dispatch({
				type: onError,
				payload: {
					errorMessage: error.message,
					forEndpoint: url,
				},
			});
	}
};

export default api;