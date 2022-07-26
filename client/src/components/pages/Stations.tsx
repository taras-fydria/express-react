import * as React from 'react';
import {FC} from 'react';
import StationList from "../modules/station/StationList";

const Stations: FC = () => {
    return (
        <div className={`station-page`}>
            <StationList/>
        </div>
    );
};

export default Stations;
