import * as React from 'react';
import {FC} from 'react';
import IStation from '../../types/interfaces/IStation';
import useGetData from "../../hooks/useGetData";

const Stations: FC = () => {
    const stations: Array<IStation> = useGetData('/stations');

    return (
        <div>
            {stations && stations.length && (
                <ul>
                    {stations.map((station: IStation) => (
                        <li key={station.id}>
                            <h2>
                                {station.name}
                            </h2>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Stations;
