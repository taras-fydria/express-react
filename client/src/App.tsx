import * as React from "react";
import './App.scss'
import {Routes, Route} from "react-router-dom";
import {FC} from "react";
import MainHeader from "./components/UI/MainHeader";
import {router} from "./router/router";

const App: FC = (): JSX.Element => {
  return (
      <>
        <MainHeader/>
        <Routes>
          {router && router.length > 0 && (
              <>
                {router.map((route, i) => (
                    <Route key={i} path={route.path} element={route.element}/>
                ))}
              </>
          )}
        </Routes>
        <main>
        </main>
      </>
  )
}

export default App