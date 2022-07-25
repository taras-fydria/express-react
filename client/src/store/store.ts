import {configureStore} from '@reduxjs/toolkit'
import AppLoading from "./appLoading";
import stationPage from "./selectStationPage";

export const store = configureStore({
    reducer: {
        appLoading: AppLoading,
        stationPage: stationPage
    }
})

// export type RootState = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
