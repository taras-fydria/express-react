import {configureStore} from '@reduxjs/toolkit'
import LoadingReducer from "./loadingReducer";

export const store = configureStore({
    reducer: {
        loading: LoadingReducer
    }
})

// export type RootState = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
