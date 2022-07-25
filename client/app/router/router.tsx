import * as React from "react";
import { RouteProps} from 'react-router-dom'
import Home from "../components/page/Home";
import Stations from "../components/page/Stations";
import Tanks from "../components/page/Tanks";

export const router:Array<RouteProps> = [
    {
        path: '/',
        element:<Home/>
    },
    {
        path:'/stations',
        element:<Stations/>
    },
    {
        path: '/tanks',
        element: <Tanks/>
    }
]

