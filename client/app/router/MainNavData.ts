import {NavLinkProps} from "react-router-dom";


export const mainNavData:Array<NavLinkProps> = [
    {
        to: `/`,
        title: 'Home',
        children:false,
    },
    {
        to: '/stations',
        title: 'Stations',
        children:false,
    },
    {
        to: '/tanks',
        title: 'Tanks',
        children: false
    }
]