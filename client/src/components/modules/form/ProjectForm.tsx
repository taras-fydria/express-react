import * as React from "react";
import {FC} from "react";
import IStation from "../../../types/interfaces/IStation";

interface IProjectForm{
    formData: IStation | any
}

const ProjectForm:FC<IProjectForm> = props => {
    const {formData} = props;
    const formInputs = ()=>{
        for (const inputData in formData){
            console.log(inputData)
        }
    }
  return(
      <form>

      </form>
  )
}
