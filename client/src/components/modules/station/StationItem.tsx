import * as React from "react";
import {FC, useState} from "react";
import {IStationItem} from "../../../types/interfaces/Station";
import StationPreview from "./StationPreview";
import StationForm from "./StationForm";

const StationItem: FC<IStationItem> = ({station, editable}) => {
    const {tel, address, tanks, name, id} = station
    const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false)
    const btnClickHandler = () => {
        setShowUpdateForm(!showUpdateForm)
    }
    const buttonLabel = () => !showUpdateForm ? 'Edit Station' : 'Close Edit'

    return (
        <div className={`station-item`}>
            {editable ? (
                <>
                    {showUpdateForm ?
                        <StationForm/> :
                        <StationPreview id={id} name={name} address={address} tel={tel} tanks={tanks}/>
                    }
                    <button onClick={btnClickHandler}>{buttonLabel()}</button>
                </>
            ) : <StationPreview id={id} name={name} address={address} tel={tel} tanks={tanks}/>}
        </div>
    )
}


export default StationItem
