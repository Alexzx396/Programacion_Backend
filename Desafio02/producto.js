module.exports = class Product {
    id;
    nombre;
    precio;
    descripcion;
    constructor(id, nombre, precio, descripcion) {
        (this.id = id),(this.nombre = nombre), (this.precio = precio), (this.descripcion = descripcion);
    }
  };