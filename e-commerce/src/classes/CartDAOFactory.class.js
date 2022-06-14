import config from "../utils/config.js";
import CartDAOFile from "../service/cart/CartDAO.file.js";
import CartDAOMem from "../service/cart/CartDAO.mem.js";
import CartDAOMongo from "../service/cart/CartDAO.mongo.js";

class CartDAOFactory {
  static get() {
    switch (config.srv.PERSISTENCE) {
      case "MEM":
        return new CartDAOMem();
      case "FILE":
        return new CartDAOFile();
      case "MONGOATLAS":
        return new CartDAOMongo();

      default:
        return;
    }
  }
}

export default CartDAOFactory;