import {FC, ReactElement} from "react";

export  interface iRouterLink {
    element: ReactElement,
    path: string,
    children?: [iRouterLink]

}

export interface iRouterLinkIndex {
    index: boolean,
    element: ReactElement
}