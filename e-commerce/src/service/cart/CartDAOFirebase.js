import ContainerFirebase from "../../containers/ContainerFirebase.js";

class CartDAOFirebase extends ContainerFirebase {
  constructor() {
    super("Items");
  }
}

export default CartDAOFirebase;
