var carrito = [];

//1. Add product
function addToCart(producto) {
    //1) Seteo el local storage: Clave 2) Valor
    localStorage.setItem("Carrito", carrito)
    carrito.push(producto)
    console.log("agregado", carrito)
}
//2. Find product
function findProduct(product) {
    return carrito.find(prod => prod.nombre === product);
}

//3. Delete product
function deleteProduct(product) {
    return carrito.filter(prod => prod.nombre !== product);
}

//4. Order by price
let orderByPrice = carrito.sort(function (primerItem, segundoItem) {
    return parseFloat(primerItem.precio) - parseFloat(segundoItem.precio);
});

class Producto {
    constructor(nombre, marca, precio, temporada) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.temporada = temporada;
    }
    descuento = function () {
        if (this.temporada == 2021) {
            return this.precio / 2;
        } else {
            return this.precio
        }
    }
}

// const prod1 = new Producto("Pollera Clara", "Bloom", 100, 2021)
// const prod2 = new Producto("Pollera Camila", "Bloom", 200, 2020)
// const prod3 = new Producto("Pollera Carolina", "Bloom", 300, 2020)

//EJERCICIO 8
//Mostrar elementos en el DOM
function mostrarCarrito() {
    Array.from(localStorage.getItem("Carrito", carrito)).map(item => {
        let listaProd = document.getElementById("listaProductos")
        let lista = document.createElement("li");
        lista.textContent = item.nombre;
        listaProd.appendChild(lista)
    })
}

let element_formProd = document.getElementById("form-productos")

element_formProd.addEventListener("submit", (event) => {
    //Previene el refresh
    event.preventDefault()
    //Obtener elementos del form
    let element_nombre = document.getElementById("nombre-producto")
    let element_marca = document.getElementById("marca-producto")
    let element_precio = document.getElementById("precio-producto")
    let element_temporada = document.getElementById("temporada-producto")

    const inputNombre = element_nombre.value;
    const inputMarca = element_marca.value;
    const inputPrecio = element_precio.value;
    const inputTemporada = element_temporada.value;

    addToCart(new Producto(inputNombre, inputMarca, inputPrecio, inputTemporada))

    mostrarCarrito()
})
