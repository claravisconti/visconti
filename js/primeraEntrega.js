const carrito = [
    {
        id: 1,
        nombre: "Clara",
        marca: "Bloom",
        precio: 500,
        temporada: 2021
    },
    {
        id: 2,
        nombre: "Camila",
        marca: "Bloom",
        precio: 300,
        temporada: 2020
    },
    {
        id: 3,
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
// console.log(addToCart({
//     id: 4,
//     nombre: "Cecilia",
//     marca: "Bloom",
//     precio: 100,
//     temporada: 2021
// }))

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
let orderByPrice = carrito.sort(function(primerItem, segundoItem) {
    return parseFloat(primerItem.precio) - parseFloat(segundoItem.precio);
});

//console.log(orderByPrice)
