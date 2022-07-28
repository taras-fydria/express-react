import * as React from 'react';
import {FC, ReactElement, useContext, useState} from 'react';
import FormContext, {FormProvider} from "./FormContext";
import {IInputWrap} from "../../../types/interfaces/project-form";


const WrapInput: FC<IInputWrap> = (props): ReactElement => {
    const {name, labelClass, children, label} = props
    const {formValue} = useContext(FormContext)
    console.log(formValue)
    return (
        <div>
            <label className={labelClass} >
                {label && (
                    <p className={`gap-0`}>{label}</p>
                )}
                {children}
            </label>
        </div>
    )
}

export default WrapInput
