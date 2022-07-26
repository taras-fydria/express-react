import * as React from "react";
import {IStation} from "../../../types/interfaces/Station";
import useGetData from "../../../hooks/useGetData";
import StationItem from "./StationItem";
import {useState} from "react";
import StationForm from "./StationForm";

const StationList = () => {
    const stations: Array<IStation> = useGetData('/stations');
    const [addNewItem, setAddNewItem] = useState<boolean>(true)
    const btnClickHandler = () => setAddNewItem(!addNewItem)

    return (
        <>
            {stations && stations.length && (
                <ul className={'station-list list-unstyled container'}>
                    {stations.map((station) => (
                        <li className={`station-list__item`} key={station.id}>
                            <StationItem editable={true} station={station}/>
                        </li>
                    ))}
                    <li>
                        {addNewItem ?
                            <button className={`btn btn-lg btn-primary`} onClick={btnClickHandler}>Add New Item</button>
                            : <StationForm />}
                    </li>
                </ul>
            )}
        </>
    )
}

export default StationList
