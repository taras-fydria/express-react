import * as React from "react";
import './App.scss'
import {Routes, Route} from "react-router-dom";
import {FC, useEffect, useReducer, useState} from "react";
import MainHeader from "./components/UI/MainHeader";
import {router} from "./router/router";
import {initialState, loadingReducer} from "./store/loadingReducer";

const App: FC = (): JSX.Element => {
    const [appState, _] = useReducer(loadingReducer, initialState)
    const updateLoadingClass = (): string => {
        let className = 'app-main';
        switch (true) {
            case appState.loading:
                className += ` ${className}'--loading'`;
                break;
            case appState.loaded:
                className += ` ${className}'--loaded'`;
                break;
            case  appState.failed:
                className += `${className}--failed`;
        }
        return className
    }
    const [loadingClass, setLoadingClass] = useState<string>(updateLoadingClass)

    useEffect(() => {
            setLoadingClass(updateLoadingClass)
            console.log(loadingClass)
        },
        [appState])

    return (
        <>
            <MainHeader/>
            <main className={loadingClass}>
                <Routes>
                    {router && router.length > 0 && (
                        <>
                            {router.map((route, i) => (
                                <Route key={i} path={route.path} element={route.element}/>
                            ))}
                        </>
                    )}
                </Routes>
            </main>
        </>
    )
}

export default App
