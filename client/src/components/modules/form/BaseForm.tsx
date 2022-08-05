import * as React from "react";
import {FC, FormEvent, useState} from "react";
import {IBaseForm} from "../../../types/interfaces/project-form";
import {FormProvider} from "./FormContext";

const BaseForm: FC<IBaseForm> = props => {
    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => event.preventDefault()
    const formClass = () => props.formClass ? `form ${props.formClass}` : 'form'
    const [formData, setFormData] = useState(props.formData)

    const updateForm = (event:FormEvent<HTMLFormElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        console.log(event.target)
        for (const property in formData){
            // console.log(property, formData)
        }
    }

    return (
        <FormProvider value={{updateForm}}>
            <form className={formClass()} onSubmit={formSubmitHandler}>
                {props.children}
            </form>
        </FormProvider>
    )
}

export default BaseForm
