import { createSlice } from '@reduxjs/toolkit'; 
// import { createSelector } from 'reselect';

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

// filters:
// export const getSoldOutWorks = createSelector(
//    state => state.entities.works.list
//    works => works.filter 
//)

export const {setLoadingToTrue, requestFailed, worksReceived} = slice.actions;
export default slice.reducer;