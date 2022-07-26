import *  as React from "react";
import {FC} from "react";
import {IStation} from "../../../types/interfaces/Station";

const StationForm: FC<IStation> = ({tel, address, name, id, tanks, children}) => {
    return (
        <form className={`form`}>
            <label>
                <p className={`form-label`}>Name</p>
                <input className={`form-control-lg`} type="text" placeholder={`Station Name`} value={name}/>
            </label>
        </form>
    )
}

export default StationForm
