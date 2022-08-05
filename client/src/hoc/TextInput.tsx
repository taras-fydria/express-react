import * as React from "react";
import {FC} from "react";
import BaseInput from "../components/modules/form/BaseInput";
import {IBaseInput, ITextInput} from "../types/interfaces/project-form";
import {InputType} from "../types/enums/EnumTypes";


const textInput = (Component: FC<IBaseInput>) => {
    return ({ type=InputType.text, ...props}: ITextInput): JSX.Element => {
        return (
            <Component {...props} type={InputType.text}/>
        )
    }
}

export default textInput(BaseInput)
