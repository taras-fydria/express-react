import * as React from "react";
import {FC} from "react";
import {routerType} from "../../router/router";
import {Link} from "react-router-dom";

interface iHeaderNav {
    routes: routerType
}

const Nav:FC<iHeaderNav> = (props)=>{
    const {routes} = props
    console.log(routes)
    return(
        <nav>
            {routes && routes.length && (
                <ul>
                    {routes.map(item=>(
                        <li>
                            <Link to={item.path}/>
                        </li>
                    ))}
                </ul>
            )}
            Navigation
        </nav>
    )
}

export default Nav