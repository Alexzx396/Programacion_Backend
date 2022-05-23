import ContainerMongoDB from "../../ContainerMongoDB.js";

class ProductDAOMongoDB extends ContainerMongoDB {
  constructor() {
    super("productos", {
      id: {
        type: Number,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
      title: {
        type: String,
        required: true,
        max: 150,
      },
      description: {
        type: String,
        required: true,
        max: 250,
      },
      pictureUrl: {
        type: String,
        required: true,
        max: 400,
      },
      price: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
    });
  }
}

export default ProductDAOMongoDB;
