import  * as React from 'react';
import {FunctionComponent} from 'react';
import InputType from "../../../types/enums/EnumTypes";

const TextInput: React.FC = (): React.ReactElement => {
  return (
    <>
        <input type={InputType.text} />
    </>
  );
};

export default TextInput
