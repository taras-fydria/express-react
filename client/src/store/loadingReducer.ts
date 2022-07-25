import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";

export enum Actions {
    Loading = 'LOADING',
    Loaded = 'LOADED',
    Failed = 'FAILED'
}

export interface IState {
    loading: boolean,
    loaded: boolean,
    failed: boolean,
}

export const initialState: IState = {
    loading: false,
    failed: false,
    loaded: false
}

export type Action = {
    type: Actions,
    payload?: IState
}

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        loading: state => {
            state.loading = true
        },
        loaded: state => {
            state.loaded = true
        },
        failed: state => {
            state.failed = true
        }
    }
})


export const {loading, loaded, failed} = loadingSlice.actions
export const selectLoading = (state: RootState) => state.loading
export default loadingSlice.reducer
