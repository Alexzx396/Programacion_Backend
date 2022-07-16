// /*========== Modulos globales para DAOs ==========*/
// import CustomError from "../classes/CustomError.class.js";
// import MongoDBClient from "../classes/MongoDBClient.class.js";
// import logger from "../utils/logger.js";

// /*========== Modulos especifico para DAOs ==========*/
// import ProductoModel from "../models/product.model.js";

// class ProductosDAO {
//     constructor(){
//         super();
//         this.colecction = ProductoModel;
//         this.conn = new MongoDBClient();
//     }
    
//     async listarAll() {
//         let docs = [];
//         try {
//             await this.conn.connect();
//             docs = await this.colecction.find({})
//             return docs;
//         } catch (error) {
//             const cuserr = new CustomError(500, 'Error al listarAll()', error);
//             logger.error(cuserr);
//             throw cuserr;
//         } finally {
//             this.conn.disconnect();
//             logger.info(`Elementos listados ${docs.length}`);
//         }
//     }

//     async guardar(elemento) {
//         try {
//             await this.conn.connect();
//             let doc = await this.colecction.create(elemento);
//             return doc;
//         } catch (error) {
//             const cuserr = new CustomError(500, 'Error al guardar()', error);
//             logger.error(cuserr);
//             throw cuserr;
//         } finally {
//             this.conn.disconnect();
//             logger.info(`Elemento guardado ${elemento}`);
//         }
//     }
// }

// export default ProductosDAO;
