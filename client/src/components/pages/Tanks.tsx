import * as React from "react";
import ITank from "../../types/interfaces/ITank";
import useGetData from "../../hooks/useGetData";
import NothingFound from "../UI/NothingFound";

const Tanks = () => {
  const tanks:Array<ITank> = useGetData('/tanks');

  return(
      <div>
          Tanks Page
          {tanks && tanks.length ? (
              <ul>
                  {tanks.map((tank: ITank)=>(
                      <li key={tank.id}>
                          {tank.id}
                          {tank.station}
                          {tank.fuelType}
                      </li>
                  ))}
              </ul>
          ): <NothingFound/>}
      </div>
  )
}

export default Tanks

