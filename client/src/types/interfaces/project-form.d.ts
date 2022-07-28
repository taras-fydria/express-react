export declare enum InputType {
    button = 'button',
    checkbox = 'checkbox',
    color = 'color',
    date = 'date',
    datetimeLocal = 'datetime-local',
    email = 'email',
    file = 'file',
    hidden = 'hidden',
    image = 'image',
    month = 'month',
    number = 'number',
    password = 'password',
    radio = 'radio',
    range = 'range',
    reset = 'reset',
    search = 'search',
    submit = 'submit',
    tel = 'tel',
    text = 'text',
    time = 'time',
    url = 'url',
    week = 'week',
    datetime = 'datetime'
}

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

