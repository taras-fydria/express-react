import * as React from 'react';
import {ChangeEvent, FC, FormEvent} from 'react';
import IStation from '../../../types/interfaces/IStation';
import InputType from "../../../types/enums/EnumTypes";
import FormInput from "../../../util/form/FormInput";

interface IStationForm {
    station: IStation,
}

const StationForm: FC<IStationForm> = props => {
    const {station} = props;

    const formSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
    }

    const updateFormData = (event: ChangeEvent<HTMLInputElement>): void => {

    }
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <FormInput onChange={updateFormData} label={`Station Name`} type={InputType.text} name={`name`}/>
                <FormInput onChange={updateFormData} label={'Station Address'} type={InputType.text} name={'address'}/>
            </form>
        </>
    )
}


export default StationForm
