// import mongoose from "mongoose";

// const CartSchema = mongoose.Schema(
//   {
//     userId: { type: String, required: true },
//     products: [
//       {
//         productId: {
//           type: String,
//         },
//         quantity: {
//           type: Number,
//           default: 1,
//         },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const CartModel = mongoose.model("carritos", CartSchema);

// export default CartModel;


import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    products: {
      type: Array,
    },
  },
  { timestamps: true }
);

const CartModel = mongoose.model("carritos", CartSchema);

export default CartModel;