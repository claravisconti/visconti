//Clase
class Producto {
    constructor(nombre, marca, precio, temporada) {
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
    //1. Add product
    addToCart(producto) {
        return carrito.push(
            producto
        )
    }
    //2. Find product
    findProduct(product) {
        return carrito.find(prod => prod.nombre === product);
    }

    //3. Delete product
    deleteProduct(product) {
        return carrito.filter(prod => prod.nombre !== product);
    }

    //4. Order by price
    orderByPrice = carrito.sort(function (primerItem, segundoItem) {
        return parseFloat(primerItem.precio) - parseFloat(segundoItem.precio);
    });
}

//EJERCICIO 8
//Mostrar elementos en el DOM
Producto.map(item => {
    let listaProd = document.getElementById("listaProductos")
    let lista = document.createElement("li");
    lista.textContent = item.nombre;
    listaProd.appendChild(lista)
})

//Obtener elementos del form
let formProd = document.getElementById("form-productos")
let nombre = document.getElementById("nombre-producto")
let marca = document.getElementById("marca-producto")
let precio = document.getElementById("precio-producto")
let temporada = document.getElementById("temporada-producto")

//Escuchar evento submit del form
formProd.addEventListener("submit", (event) => {


})
