import * as React from "react";
import {IStation} from "../../../types/interfaces/Station";
import useGetData from "../../../hooks/useGetData";
import StationItem from "./StationItem";

const StationList = () => {
    const stations: Array<IStation> = useGetData('/stations');

    return(
      <>
          {stations && stations.length && (
              <ul className={'station-list'}>
                  {stations.map((station) => (
                      <li className={`station-list__item`} key={station.id}>
                            <StationItem editable={true} station={station}/>
                      </li>
                  ))}
              </ul>
          )}
      </>
  )
}

export default StationList
