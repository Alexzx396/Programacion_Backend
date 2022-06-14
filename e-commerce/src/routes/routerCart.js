import { Router } from "express";
const routerCart = new Router()

import { DAOCarts } from "../service/imports.js";

const apiCart = new DAOCarts();

routerCart.get("/", async (req, res) => {
  const response = await apiCart.getAll();
  res.status(200).send({ msg: "Carritos", data: response });
});
routerCart.post("/", async (req, res) => {
  const response = await apiCart.newCart();
  res.status(200).send({ msg: "Nuevo carrito creado", ID: response });
});

routerCart.delete("/:id", async (req, res) => {
  const response = await apiCart.eraseById(req.params.id);
  res.status(200).send({ msg: "Carrito eliminado", data: response });
});

routerCart.get("/:id/productos", async (req, res) => {
  const response = await apiCart.listById(req.params.id);
  res.status(200).send({ msg: "Productos en el carrito", data: response });
});

routerCart.post("/:id/productos/:id_prod", async (req, res) => {
  const response = await apiCart.saveToCart(req.params.id, req.params.id_prod);
  res.status(200).send({ msg: "Producto agregado al carrito", data: response });
});

routerCart.delete("/:id/productos/:id_prod", async (req, res) => {
  const response = await apiCart.eraseFromCart(
    req.params.id,
    req.params.id_prod
  );
  res
    .status(200)
    .send({ msg: "Producto eliminado del carrito", data: response });
});

export default routerCart;



// Arquitectura y capas

// import express from "express";
// const router = express.Router();

// import CartController from "../controllers/cart.controller.js";

// class CartRouter {
//   constructor() {
//     this.controller = new CartController();
//   }

//   start() {
//     router.get("/", this.controller.getAllCarts);

//     router.get("/:id/products", this.controller.getCart);

//     router.post("/", this.controller.saveCart);

//     router.put("/:id/products/:id_prod", this.controller.updateCart);

//     router.delete("/:id", this.controller.deleteCart);

//     router.delete("/:id/products/:id_prod", this.controller.deleteFromCart);

//     return router;
//   }
// }

// export default CartRouter;