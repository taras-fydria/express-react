import {useEffect, useState} from "react";
import {IAppLoading, selectLoading} from "../store/appLoading";
import {useAppSelector} from "./storeHooks";

export default function useLoadingClass(blockClass: string) {
    const appState: IAppLoading = useAppSelector(selectLoading)
    console.log(appState)

    const updateLoadingClass = (): string => {
        let className = blockClass;
        switch (true) {
            case appState.loading:
                className += ` ${className}--loading`;
                break;
            case appState.loaded:
                className += ` ${className}--loaded`;
                break;
            case  appState.failed:
                className += ` ${className}--failed`;
                break;
        }
        return className
    }

    const [loadingClass, setLoadingClass] = useState<string>(updateLoadingClass)
    useEffect(() => {
        setLoadingClass(updateLoadingClass)
        return()=>{
            setLoadingClass(updateLoadingClass)
        }
    }, [appState])

    return loadingClass
}
