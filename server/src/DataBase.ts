import {Sequelize, Options} from 'sequelize'

console.log(process.env)

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_NAME: string;
            NODE_ENV: 'development' | 'production';
            DB_PORT: string;
            DB_USER: string;
            DB_PASS: string;
            DB_URI: string,
        }
    }
}

const env = process.env

const options: Options = {
    dialect: 'postgres',
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    dialectOptions: {
        ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
        },
        keepAlive: true,
    },
    ssl: true,
}

export default new Sequelize(
    env.DB_URI,
    options
)

