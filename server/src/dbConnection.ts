import {
  ConnectionManager,
  ConnectionOptions,
  getConnectionManager,
} from 'typeorm';
import {Station} from './entity/Station';
import Tank from './entity/Tank';
import FuelType from './entity/FuelType';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      NODE_ENV: 'development' | 'production';
      DB_PORT: string;
      DB_USER: string;
      DB_PASS: string;
      DB_URI: string,
      DEV:boolean,
    }
  }
}

const connectionOptions:ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
  entities: [Station, Tank, FuelType],
  synchronize: true,
  ssl: !process.env.DEV,
  extra: !process.env.DEV ? {
    ssl: {
      rejectUnauthorized: false
    }
  } : false
}


const connectionManager: ConnectionManager = getConnectionManager();
export default connectionManager.create(<ConnectionOptions>connectionOptions);
