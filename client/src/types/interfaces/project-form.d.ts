import {InputType} from "../enums/EnumTypes";

export declare interface IBaseForm {
    formClass?: string
    formData: any
}

export declare interface IInputWrap {
    name: string,
    labelClass: string,
    validateValue?: functionValidation,
    label?: string
}

export type functionValidation = <T>(value: T) => void


export declare interface IBaseInput {
    name: string,
    type: InputType,
    placeholder?: string,
    value: string | undefined,
    className?: string
}

export declare interface ITextInput extends IBaseInput {

}

export declare interface INumberInput extends IBaseInput {

}

