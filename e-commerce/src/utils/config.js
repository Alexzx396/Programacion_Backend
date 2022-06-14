// import dotenv from "dotenv";
// import path from "path";


// dotenv.config({
//   path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
// });

// const config = {
//   mongodb: {
//     conntr: `mongodb://${process.env.MONGO_URL|| 'localhost'}:${process.env.PORT || 8080}/ e-commerce`,
//     url: process.env.MONGO_URL,
//     secret: "#hashModeMode#"
//   },
//   firebase: {
//     route:
//       "./db/ecommerce-backend-43c06-firebase-adminsdk-54ok2-723cd01a3b.json",
//   },
//   fileDB: {
//     path: "./DB"
//   },
//   srv: {
//     NODE_ENV: process.env.NODE_ENV || "development",
//     PORT: process.env.PORT || 8080,
//     MODE: process.env.MODE || "CLUSTER",
//     PERSISTENCE: process.env.PERSISTENCE || "MEM",
//   },
// };

// console.log(config);

// export default config;


// url: "mongodb+srv://ecommerce:123@cluster0.gmbcf.mongodb.net/e-commerce",


import yargs from "yargs";
import dotenv from "dotenv";
import path from "path";


dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
});


const args = yargs(process.argv.slice(2)).default({
  port: 8080,
  mode: "CLUSTER",
}).argv;

export default {
  PORT: args,
  MODE: args.mode,
  mongodb: {
    url: process.env.MONGO_URL,
  },
  fileDB: {
        path: "./DB"
      },
  firebase: {
    route:
    "./db/ecommerce-backend-43c06-firebase-adminsdk-54ok2-723cd01a3b.json",
  },
  srv: {
        NODE_ENV: process.env.NODE_ENV || "development",
        PORT: process.env.PORT || 8080,
        MODE: process.env.MODE || "CLUSTER",
        PERSISTENCE: process.env.PERSISTENCE || "MEM",
        LOG: process.env.LOG || "DEV"
      },
};

