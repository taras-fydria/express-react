import {configureStore, combineReducers, Reducer} from '@reduxjs/toolkit'
import {loadingReducer} from "./loadingReducer";

const rootReducer = combineReducers<Reducer>({loadingReducer})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

// export type RootState = ReturnType<typeof rootReducer>

export default store
