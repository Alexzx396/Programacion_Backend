import MongoDBClient from "./MongoDBClient.class.js";

const conn = new MongoDBClient();

await conn.connect();

// setTimeout(() => {
    console.log('procesos')
// }, 5000);

await conn.disconnect();





// class MongoDBClient extends DBClient {
//     async connect() {
//         throw new CustomError(500, "Method 'connect' not implemented in subclass");
//     };

//     async disconnect() {
//         throw new CustomError(500, "Method 'disconnect' not implemented in subclass");
//     }
// }

// export default MongoDBClient;