const carrito = [
    {
        nombre: "Clara",
        marca: "Bloom",
        precio: 500,
        temporada: 2021
    },
    {
        nombre: "Camila",
        marca: "Bloom",
        precio: 300,
        temporada: 2020
    },
    {
        nombre: "Carolina",
        marca: "Bloom",
        precio: 600,
        temporada: 2020
    },
]

//1. Add product
function addToCart(producto) {
    return carrito.push(
        producto
    )
}

//2. Find product
function findProduct(product) {
    return carrito.find(prod => prod.nombre === product);
}
//console.log(findProduct("Clara"))

//3. Delete product
function deleteProduct(product) {
    return carrito.filter(prod => prod.nombre !== product);
}
//console.log(deleteProduct("Camila"))

//4. Order by price
let orderByPrice = carrito.sort(function (primerItem, segundoItem) {
    return parseFloat(primerItem.precio) - parseFloat(segundoItem.precio);
});

//EJERCICIO 8
//Mostrar elementos en el DOM
carrito.map(item => {
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
    //event.preventDefault();
    const nuevo = {
        nombre: nombre.value,
        marca: marca.value,
        precio: precio.value,
        temporada: temporada.value
    };

    return addToCart(nuevo)
})

