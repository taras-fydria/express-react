import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {IStation} from "../types/interfaces/Station";

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
        // loadStationList: (state: IStationPage, action: PayloadAction<[IStation]>) => {
        //
        // }
    }
})

// export const {loadStationList} = stationListSlice.actions
export const selectStationPage = (state: RootState) => state.stationPage
export default stationListSlice.reducer
