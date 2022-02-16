import React, {FC} from "react";
import TextInput from "./TextInput";
import InputType from "../../types/enums/EnumTypes";

interface IFormInput {
    withLabel?: boolean,
    type: InputType,
    label:string,
    name: string,
    onChange:Function,
}

const FormInput: FC<IFormInput> = props => {
    const {withLabel, label, name, onChange} = props

    const Input = TextInput

    return (
        <>
            {withLabel && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}
            <Input className={''} name={name} onChange={onChange} />
        </>
    )
}

FormInput.defaultProps = {
    withLabel: true,
}

export default FormInput
