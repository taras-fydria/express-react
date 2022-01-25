"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var env = process.env;
var options = {
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
};
exports.default = new sequelize_1.Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, options);
