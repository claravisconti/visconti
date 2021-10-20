//Clase
class Producto {
    constructor(id, nombre, marca, precio, temporada) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.temporada = temporada;
    }
    descuento = function () {
        if (this.temporada == "nuevo") {
            return this.precio / 2;
        } else {
            return this.precio
        }
    }
}

//Prompt 
let id = prompt("id")
let nombre = prompt("nombre")
let marca = prompt("marca")
let precio = prompt("precio")
let temporada = prompt("temporada: nuevo o anterior")

const producto2 = new Producto(id, nombre, marca, precio, temporada);

console.log(producto2)
console.log(producto2.descuento())


