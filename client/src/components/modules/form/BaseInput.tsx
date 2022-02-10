import * as React from 'react';
import {FC, ReactElement, useState} from 'react';
import InputType from '../../../types/enums/EnumTypes';

interface IBaseInput{
  name:string,
  labelClass:string,
  type:InputType
}

const BaseInput:FC<IBaseInput> = (props):ReactElement => {
  const {name, labelClass, type} = props
  const [value, setValue] = useState(null)
  const updateValue = (value: any) =>setValue(value)

  return(
    <div>
      <label htmlFor={name} className={labelClass}>

      </label>
    </div>
  )
}

export default BaseInput
