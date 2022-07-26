import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

export interface IAppLoading {
    loading: boolean,
    loaded: boolean,
    failed: boolean,
}

export const appLoading: IAppLoading = {
    loading: false,
    failed: false,
    loaded: false
}

export const loadingSlice = createSlice({
    name: "loading",
    initialState: appLoading,
    reducers: {
        loading: state => {
            state.loading = true
        },
        loaded: state => {
            state.loaded = true
            state.loading = false
        },
        failed: state => {
            state.failed = true
            state.loading = false
        }
    }
})


export const {loading, loaded, failed} = loadingSlice.actions
export const selectLoading = (state: RootState) => state.appLoading
export default loadingSlice.reducer
