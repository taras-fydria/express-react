import *  as React from "react";
import {FC, FormEvent, useState} from "react";
import {IStation} from "../../../types/interfaces/Station";
import WrapInput from "../form/WrapInput";
import {FormProvider} from "../form/FormContext";
import BaseForm from "../form/BaseForm";
import TextInput from "../../../hoc/TextInput";
import NumberInput from "../../../hoc/NumberInput";

const StationForm: FC<IStation> = props => {
    const [formValue, setFormValue] = useState<IStation>(props)
    return (
        <BaseForm formData={props}>
            <WrapInput name={'name'} labelClass={''} label={'Station Name'}>
                <TextInput value={props.name} name={'name'}/>
            </WrapInput>
            <WrapInput name={'tel'} labelClass={''} label={'Station phone'}>
                <NumberInput value={props.tel} name={'tel'}/>
            </WrapInput>
        </BaseForm>
    )
}

export default StationForm
