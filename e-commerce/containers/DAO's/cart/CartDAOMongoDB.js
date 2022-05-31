import ContainerMongoDB from "../../ContainerMongoDB.js";

class CartDAOMongoDB extends ContainerMongoDB {
  constructor() {
    super("Items", {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      products: {
        type: Array,
      },
    });
  }
}

export default CartDAOMongoDB;
