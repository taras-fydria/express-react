import {getConnectionManager} from "typeorm";
import {Station} from "./entity/Station";

export default getConnectionManager().create({
    type: 'postgres',
    url: process.env.DB_URI,
    entities:[Station],
})