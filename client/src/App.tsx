import * as React from "react";
import './App.scss'
import {Routes, Route} from "react-router-dom";
import {FC} from "react";
import MainHeader from "./components/UI/MainHeader";
import {router} from "./router/router";
import useLoadingClass from "./hooks/useLoadingClass";

const App: FC = (): JSX.Element => {
    const loadingClass = useLoadingClass('app-main')
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
