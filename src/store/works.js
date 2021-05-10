import { createSlice } from '@reduxjs/toolkit'; 

const slice = createSlice({
    name: 'works',
    initialState: {
        list: [],
        errors: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        setLoadingToTrue: (state) => {
			state.loading = true;
		},
        requestFailed: (state, action) => {
			state.loading = false;
			state.error.push(action.payload);
		},
        worksReceived: (state, action) => {
			state.list = state.list.concat(action.payload);
			state.lastFetch = Date.now();
			state.loading = false;
		}
    }
})

export const {setLoadingToTrue, requestFailed, worksReceived} = slice.actions;
export default slice.reducer;