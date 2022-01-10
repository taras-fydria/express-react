import * as React from "react";
import {FC} from "react";
import HeaderNav from "./HeaderNav";
import {mainNavData} from "../../router/MainNavData";

const MainHeader:FC = ()=>{
    return(
        <header>
            <div className={`container`}>
                <HeaderNav navMenu={mainNavData}/>
            </div>
        </header>
    )
}

export default MainHeader
