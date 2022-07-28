import * as React from "react";
import {FC} from "react";
import BaseInput from "../components/modules/form/BaseInput";
import {IBaseInput, ITextInput, InputType} from "../types/interfaces/project-form";


const textInput = (Component: FC<IBaseInput>) => {
    return ({ type=InputType.text, ...props}: ITextInput): JSX.Element => {
        return (
            <Component {...props} type={InputType.text}/>
        )
    }
}

export default textInput(BaseInput)
