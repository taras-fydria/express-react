import * as React from "react";
import {FC} from "react";
import HeaderNav from "./HeaderNav";
import {routes} from "../../router/router";

const Header:FC = ()=>{
    return(
        <header>
            <div>
                <HeaderNav routes={routes}/>
            </div>
        </header>
    )
}

export default Header
