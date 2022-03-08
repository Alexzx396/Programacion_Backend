class Usuario {
    nombre;
    apellido;
    libros;
    mascotas;
  
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
    
//------3) Hacer un usuario con metodos especificos------ //

//--------------------punto 1--------------------//

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
    }

//--------------------punto 2 y 3--------------------//
    
    addMascota(mascota) { 
        this.mascotas.push(mascota)
    } 
    
    countMascotas() {
        console.log(this.mascotas.length);
      }

//--------------------punto 4 y 5--------------------//

    addBook(nombre, autor) {
        this.libros.push({ Nombre: nombre, Autor: autor})
    }

    getBookNames() {
        this.libros.forEach((libro) => {
            console.log(`${libro.Nombre}`);
          });
       }
    }


let p = new Usuario("Alex rolando", "Arce suarez");

p.getFullName();

p.addMascota("gato");
p.addMascota("burro");
p.addMascota("caballo");
console.log(p.mascotas);

p.countMascotas();

p.addBook("El codigo limpio", "Robert C. Martins");
p.addBook("Padre rico padre pobre", "Robert Kiyosaki");
p.getBookNames();