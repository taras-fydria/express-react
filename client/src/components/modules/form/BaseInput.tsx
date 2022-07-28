import * as React from "react";
import {FC, useContext} from "react";
import FormContext from "./FormContext";
import {IBaseInput} from "../../../types/interfaces/project-form";



const BaseInput: FC<IBaseInput> = ({name, type, placeholder, value}) => {
    const {updateForm} = useContext(FormContext)
    return (
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={updateForm}/>
    )
}


export default BaseInput
