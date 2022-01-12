import {Sequelize} from 'sequelize'

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_NAME: string;
            NODE_ENV: 'development' | 'production';
            DB_PORT?: number;
            DB_USER: string;
            DB_PASS: string;
        }
    }
}

const env = process.env

export default new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASS,
    {
        dialect: 'postgres',
        protocol: 'postgres',
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialectOptions: {
            ssl: {
                require: true,
                // Ref.: https://github.com/brianc/node-postgres/issues/2009
                rejectUnauthorized: false,
            },
            keepAlive: true,
            native:true
        },
        ssl: true,
    }
)

