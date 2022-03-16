import ContainerFs from "../../ContainerFS.js.js";

class CartDAOFs extends ContainerFs {
    constructor() {
        super("../../../cart.json")
    }
}

export default CartDAOFs;