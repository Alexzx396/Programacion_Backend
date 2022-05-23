import ProductDAOMongoDB from "./product/ProductDAOMongoDB.js";
import ProductDAOFirebase from "./product/ProductDAOFirebase.js";

import CartDAOFirebase from "./cart/CartDAOFirebase.js";
import CartDAOMongoDB from "./cart/CartDAOMongoDB.js";
// import UsersDAOMongoDB from "./users/UsersDAOMongoDB.js";

let DAOProducts;
let DAOCarts;
// let DAOUsers;

switch (process.env.DBTYPE) {
  case "Mongo":
    DAOProducts = ProductDAOMongoDB;
    DAOCarts = CartDAOMongoDB;
    // DAOUsers = UsersDAOMongoDB;

  break;

  case "Firebase":
    DAOProducts = ProductDAOFirebase;
    DAOCarts = CartDAOFirebase;
    // DAOUsers = UsersDAOMongoDB;

  break;


  default:
    DAOProducts = ProductDAOMongoDB;
    DAOCarts = CartDAOMongoDB;
    // DAOUsers = UsersDAOMongoDB;
    
  break;
    
}

export { DAOProducts, DAOCarts};
