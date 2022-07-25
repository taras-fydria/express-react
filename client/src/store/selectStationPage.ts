import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import IStation from "../types/interfaces/IStation";

export interface IStationPage {
    stationsList: [IStation] | null
}

export const stationPage: IStationPage = {
    stationsList: null
}

export const stationListSlice = createSlice({
    name: 'Stations list',
    initialState: stationPage,
    reducers: {
        load: (state: IStationPage, action: PayloadAction<[IStation]>) => {

        }
    }
})

export const {load} = stationListSlice.actions
export const selectStationPage = (state: RootState) => state.stationPage
export default stationListSlice.reducer
