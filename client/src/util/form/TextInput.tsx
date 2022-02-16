import React, {ChangeEvent, FC} from "react";

interface ITextInput {
    className: string;
    name: string;
    onChange: Function,
    value: string
}

const TextInput: FC<ITextInput> = (props):JSX.Element => {
    const {name, className, onChange, value} = props


    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => onChange(event)

    return (
        <input type="text" className={className} name={name} onChange={changeHandler} value={value}/>
    )
}

TextInput.defaultProps = {
    value: ''
}

export default TextInput
