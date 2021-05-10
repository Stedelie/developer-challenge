import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "store/reducer";

export default function configureAppStore() {
	return configureStore({
		reducer,
        middleware: [
            ...getDefaultMiddleware(),
        ], 
	});
}