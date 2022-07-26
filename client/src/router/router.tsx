import * as React from "react";
import { RouteProps} from 'react-router-dom'
import Home from "../components/pages/Home";
import Stations from "../components/pages/Stations";

export const router:Array<RouteProps> = [
    {
        path: '/',
        element:<Home/>
    },
    {
        path:'/stations',
        element:<Stations/>
    },
]

