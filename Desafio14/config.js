import path from "path";

import yargs from "yargs";

const args = yargs(process.argv.slice(2)).default({
  port: 8080,
}).argv;


export default {
  PORT: args,
  mongo: {
    client: process.env.MONGO_CLIENT,
    url: process.env.MONGO_URL,
  },
  mariaDB: {
    client: process.env.MARIADB_CLIENT,
    connection: {
      host: process.env.MARIADB_CONNECTION_HOST,
      user: process.env.MARIADB_CONNECTION_USER,
      password: "",
      database: process.env.MARIADB_CONNECTION_DB,
    },
  },
  SQLite: {
    client: process.env.SQLITE_CLIENT,
    connection: { filename: path.join(process.cwd(), "/DB/ecommerce.db3") },
    useNullAsDefault: true,
  },
  
  facebookApp: {
    FACEBOOK_APP_ID: "313571780754818",
    FACEBOOK_APP_SECRET: "4ddd6657d13f40707238a67946594026"
  }

};