import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import getData from '../../http/getData';
import IStation from '../../types/interfaces/IStation';

const Stations: FC = () => {
  const [stations, setStations] = useState<Array<IStation>>([]);
  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async (): Promise<void | Array<IStation>> => {
    try {
      const newStations: any = await getData('/stations');
      setStations(newStations);
    } catch (e) {
      console.error(e);
    }
  };

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
