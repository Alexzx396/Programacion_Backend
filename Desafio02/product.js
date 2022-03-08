module.exports = class Product {
    nombre;
    precio;
    descripcion;
    constructor(nombre, precio, descripcion) {
      (this.nombre = nombre), (this.precio = precio), (this.descripcion = descripcion);
    }
  };
