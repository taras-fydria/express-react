import {useEffect, useState} from "react";
import {BASE_URL} from "../util/http/appHTTP";
import {useAppDispatch} from "./storeHooks";
import {loading, loaded, failed} from "../store/loadingReducer";


export default function useGetData(path: string) {
    const [data, setData] = useState<any | null>(null)
    const dispatch = useAppDispatch()
    const [requestUrl] = useState(`${BASE_URL}${path}`)

    useEffect(() => {
        (async () => {
            dispatch(loading)
            try {
                const response: Response = await fetch(requestUrl);
                const json = response.ok && response.status === 200 ?
                    await response.json()
                    :
                    new Error(response.statusText);
                setData(json)
                dispatch(loaded)
            } catch (error) {
                dispatch(failed)
            }
        })()
        return () => {
            setData(null)
            dispatch(loading)
        }
    }, [])

    return data;
}
