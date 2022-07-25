import {useEffect, useReducer, useState} from "react";
import {BASE_URL} from "../util/http/appHTTP";
import {loadingReducer, initialState, Actions} from "../store/loadingReducer";


export default function useGetData(path: string) {
    const [data, setData] = useState<any | null>(null)
    const [requestUrl] = useState(`${BASE_URL}${path}`)
    const [_, dispatch] = useReducer(loadingReducer, initialState)

    useEffect(() => {
        (async () => {
            dispatch({type: Actions.Loading, payload: initialState})
            try {
                const response: Response = await fetch(requestUrl);
                const json = response.ok && response.status === 200 ?
                    await response.json()
                    :
                    new Error(response.statusText);
                setData(json)
                dispatch({type:Actions.Loaded})
            } catch (error) {
                dispatch({type: Actions.Failed})
            }
        })()
        return ()=>{
            setData(null)
            dispatch({type:Actions.Loading})
        }
    }, [])

    return data;
}
