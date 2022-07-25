import * as React from 'react';
import {FC} from 'react';
import IStation from '../../types/interfaces/IStation';
import useGetData from "../../hooks/useGetData";

const Stations: FC = () => {
    const stations: Array<IStation> = useGetData('/stations');
    return (
        <div className={`station-page`}>
            {stations && stations.length && (
                <ul className={'station-list'}>
                    {stations.map((station: IStation) => (
                        <li className={`station-list__item`} key={station.id}>
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
