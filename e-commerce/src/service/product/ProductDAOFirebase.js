import ContainerFirebase from "../../containers/ContainerFirebase.js";

class ProductDAOFirebase extends ContainerFirebase {
  constructor() {
    super("productos");
  }
}

export default ProductDAOFirebase;
