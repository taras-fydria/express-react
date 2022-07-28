import {FC} from "react";
import BaseInput from "../components/modules/form/BaseInput";
import {IBaseInput, InputType, INumberInput} from "../types/interfaces/project-form";

const numberInput = (Component:FC<IBaseInput>) => {
  return (props:INumberInput)=>{
     return(
         <Component {...props} type={InputType.number}/>
     )
  }
}

export default numberInput(BaseInput)
