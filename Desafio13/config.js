import path from "path";


export default {
  PORT: process.env.PORT || 8282,
  mongo: {
    client: "mongodb",
    url: "mongodb+srv://damian:damian@clusterex11.xtyhv.mongodb.net/Desafio11?retryWrites=true&w=majority",
  },
  mariaDB: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "Desafio08",
    },
  },


  SQLite: {
    client: "better-sqlite3",
    connection: { filename: path.join(process.cwd(), "/DB/ecommerce.db3") },
    useNullAsDefault: false,
    debug: true
   },


  facebookApp: {
    FACEBOOK_APP_ID: "313571780754818",
    FACEBOOK_APP_SECRET: "4ddd6657d13f40707238a67946594026"
  }
};