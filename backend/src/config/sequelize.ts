/* eslint-disable quote-props */
/* eslint-disable quotes */
import * as dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    host: process.env.MYSQL_HOST!,
    dialect: "mysql",
    logging: console.log,
    dialectOptions: {
      typeCast: true,
    },
    // timezone: "+09:00",
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    host: process.env.MYSQL_HOST!,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      typeCast: true,
    },
    // timezone: "+09:00",
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    username: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    database: process.env.MYSQL_DATABASE!,
    host: process.env.MYSQL_HOST!,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      typeCast: true,
    },
    // timezone: "+09:00",
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
