import {ITank} from "./ITank";

export declare interface IStation {
    id?: number;
    name?: string,
    address?: string,
    tel?: string,
    tanks?: Array<ITank>
}

export declare interface IStationItem {
    station: IStation,
    editable: boolean
}
