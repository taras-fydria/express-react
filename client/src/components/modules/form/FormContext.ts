import * as React from "react";

const FormContext = React.createContext<any>({})

export const FormProvider = FormContext.Provider

export default FormContext
