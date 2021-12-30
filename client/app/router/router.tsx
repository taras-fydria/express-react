import {iRouterLink} from "../types/RouterLink";
import App from "../app";
import Home from "../components/page/Home";
import * as React from "react";
import Station from "../components/page/Station";

export type routerType = [iRouterLink]


export const routes:routerType = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                element: <Station/>,
                path:'/station'
            }
        ]
    }
    // {
    //     element: <App />,
    //     path: "/",
    //     children: [
    //         {
    //             index: true,
    //             element: <Home />
    //         },
    //         {
    //             path: "teams",
    //             element: <Teams />,
    //             children: [
    //                 {
    //                     index: true,
    //                     element: <LeagueStandings />
    //                 },
    //                 {
    //                     path: ":teamId",
    //                     element: <Team />
    //                 },
    //                 {
    //                     path: ":teamId/edit",
    //                     element: <EditTeam />
    //                 },
    //                 {
    //                     path: "new",
    //                     element: <NewTeamForm />
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     element: <PageLayout />,
    //     children: [
    //         {
    //             element: <Privacy />,
    //             path: "/privacy"
    //         },
    //         {
    //             element: <Tos />,
    //             path: "/tos"
    //         }
    //     ]
    // },
    // {
    //     element: <Contact />,
    //     path: "/contact-us"
    // }
];