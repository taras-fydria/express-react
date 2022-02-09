import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import getData from '../../http/getData';

const Stations: FC = () => {
  const [stations, setStations] = useState<[]>([]);
  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async (): Promise<void> => {
    try {
      const newStations: any = await getData('/stations');
      setStations(newStations);
      console.log(stations);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      Station Page
    </div>
  );
};

export default Stations;
