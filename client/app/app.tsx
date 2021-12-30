import * as React from "react";
import './assets/scss/app.scss'
import {BrowserRouter, Switch} from "react-router-dom";
import {FC} from "react";
import Header from "./components/UI/Header";

const App: FC = (): JSX.Element => {
    return (
        <>
            <Header/>

            <Switch>

            </Switch>
        </>
    )
}

export default App