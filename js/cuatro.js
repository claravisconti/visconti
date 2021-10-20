//Calcular valor final de un producto en funcion de impuestos y descuentos.

const carrito = [
    {
        id: 1,
        nombre: "Pollera Clara",
        marca: "Bloom",
        precio: 100,
        temporada: 2021
    },
    {
        id: 2,
        nombre: "Pollera Clara",
        marca: "Bloom",
        precio: 200,
        temporada: 2020
    },
    {
        id: 3,
        nombre: "Pollera Clara",
        marca: "Bloom",
        precio: 300, 
        temporada: 2020
    },
]

// function factura(productos) {
//     let suma = 0;
//     for (let producto of productos) {
//         if (producto.temporada == 2020) {
//             //suma = suma + producto.precio
//             suma += producto.precio/2
//         } else {
//             suma = producto.precio
//         }
//     }
//     return suma
// }

function factura(productos) {

    //Aplicar descuentos
    let productosDescuento = productos.map(producto => {
        return producto.temporada == 2020 ? producto.precio / 2 : producto.precio
    })
    //Suma s/IVA
    let sumaTotal = productosDescuento.reduce((acumulador, valorActual) => (acumulador + valorActual))
    let IVA = (0.21 * sumaTotal)
    //Final c/IVA
    return sumaTotal + IVA

}

console.log(factura(carrito))

