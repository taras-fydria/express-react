"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var env = process.env;
exports.default = new sequelize_1.Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
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
        native: true
    },
    ssl: true,
});
