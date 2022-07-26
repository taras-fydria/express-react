import * as React from "react";
import {FC} from "react";
import {IStation} from "../../../types/interfaces/Station";

const StationPreview: FC<IStation> = ({tel, tanks, address, name}): JSX.Element => {
    return (
        <div className={'station'}>
            {name && (
                <h3 className={`station__name`}>
                    {name}
                </h3>
            )}
            {tel && (
                <a href={`tel:${tel}`}>
                    {tel}
                </a>
            )}
            {address && (
                <p>
                    {address}
                </p>
            )}
            {tanks && (
                <ul>
                    {tanks.map(({station, id, fuelType}) => (
                        <li key={id}>
                            {station}
                            {fuelType}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default StationPreview
