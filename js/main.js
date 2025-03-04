let hamburguesas = [
    { nombre: `Santo Tocino`, precio: 9800, disponibles: 17},
    { nombre: `Angelito`, precio: 7500, disponibles: 11},
    { nombre: `Cheddar Santo`, precio: 9500, disponibles: 19},
    { nombre: `Doble Gloria`, precio: 11000, disponibles: 15}
];
let carritodeCompras = []; // Vacío, porque después se llena.
let precioTotal = 0; // Se van a ir sumando a medida que elija hamburguesas.
let codigoNormal = true; //Parámetro para que la funión termine.

//Funcion Carrito:
function carrito(nombreHamburguesa, cantHamburguesas){
    const nombreHamburguesaFinal = nombreHamburguesa.trim().toUpperCase(); // Se pasa todo a mayúsculas y sin espacios.
    const prodSeleccionado = hamburguesas.find(hamburguesas => hamburguesas.nombre.toUpperCase() === nombreHamburguesaFinal);//Comparación, para despues usar un if.
    if (prodSeleccionado){
        if (cantHamburguesas > 0 && !isNaN(cantHamburguesas) && cantHamburguesas > 0){
            if ( cantHamburguesas <= prodSeleccionado.disponibles){
                for (let i = 0; i < cantHamburguesas; i++) {
                    let hamburguesaElegida = { nombre: prodSeleccionado.nombre, precio: prodSeleccionado.precio, cantidad: 1};
                    carritodeCompras.push(hamburguesaElegida);
                }
                let nuevaCantidad = prodSeleccionado.disponibles - cantHamburguesas;
                prodSeleccionado.disponibles = nuevaCantidad;
                precioTotal += prodSeleccionado.precio * cantHamburguesas;
                let agregarHamburguesas = confirm(`¿Quieres agregar otras hamburguesas a tu carrito?`);
                if (agregarHamburguesas == true ){
                    let nombreHamburguesa2 = prompt(`¿Qué hamburguesa quieres agregar al carrito?`);
                    const nombreHamburguesaSolo2 = nombreHamburguesa2.trim();
                    let cantHamburguesas2 = prompt(`¿Cuántas deseas?`)
                    carrito(nombreHamburguesaSolo2, cantHamburguesas2);
                } else{
                    let preguntaPagos = confirm(`Desea pagar su saldo?`);
                    if(preguntaPagos == true){
                        codigoNormal = false;
                        pagos();
                    }
                }
            } else{
                alert(`No hay suficiente stock de hamburguesas para realizar su pedido.`)
            }
        } else {
            alert(`Por favor, ingresa un número válido.`)
        }
    } else {
        alert(`No se ha podido encontrar esta hamburguesa en el catálogo, intenta otra vez.`);
    }
}

function mostrarCarrito(){
    if (carritodeCompras.length === 0){
        alert("Tu carrito de compras está vacío.");
    } else {
        console.log(`Los productos en tu carrito son: `)
        for (let i = 0; i < carritodeCompras.length; i++) {
            let hamburguesaCarrito = carritodeCompras[i];
            console.log(`Nombre: ${hamburguesaCarrito.nombre}, Cantidad: ${hamburguesaCarrito.cantidad}, Precio total: $${precioTotal}`);
        }
        let eliminarCarrito = confirm(`Quieres limpiar tu carrito?`);
        if (eliminarCarrito == true){
            carritodeCompras.length = 0;
        }
    }
}

// Las funciones agregarHamburguesaAlArray y eliminarHamburguesaDelArray más adelante estaría habilitada solamente para los empleados del negocio y no para todos los usuarios.
//Funcion Agregar una Hamburguesa al array:
function agregarHamburguesaAlArray(){
    let nombreHamburguesaNueva = prompt(`Ingresa el nombre de la nueva hamburguesa:`);
    let precioHamburguesaNueva = parseFloat(prompt(`Ingresa el precio de la nueva hamburguesa:`));
    let cantHamburguesaNueva = parseInt(prompt(`Ingresa la cantidad de hamburguesas disponibles para vender:`));
    if ( nombreHamburguesaNueva.trim() !== "" && !isNaN(precioHamburguesaNueva) && !isNaN(cantHamburguesaNueva) && precioHamburguesaNueva >= 0 && cantHamburguesaNueva >= 0){ //No debería aceptar un solo valor si el otro no esta, pero lo acepta igualmente.
        let hamburguesaNueva = { nombre: nombreHamburguesaNueva, precio: precioHamburguesaNueva, disponibles: cantHamburguesaNueva};
        hamburguesas.push(hamburguesaNueva);
        alert(`La hamburguesa ${nombreHamburguesaNueva} ha sido registrada correctamente`);
    } else {
        alert(`La hamburguesa no ha podido ser registrada correctamente`);
    };
}
function eliminarHamburguesaDelArray(preguntaEliminar){
    const hamburguesaEliminadaFinal = preguntaEliminar.trim().toUpperCase();
    const posDeEliminar = hamburguesas.findIndex(hamburguesas => hamburguesas.nombre.toUpperCase() === hamburguesaEliminadaFinal); // Búsqueda de la hamburguesa a eliminar.
    console.log(posDeEliminar);
    if(posDeEliminar !== -1){
        let elementoEliminado = hamburguesas.splice(posDeEliminar, 1);
        alert(`La hamburguesa ${preguntaEliminar} ha sido eliminada correctamente.`);
    } else {
        alert(`La hamburguesa no se ha encontrado, ingresa el nombre de nuevo.`);
    }
}

//Function de Formas de Pago: 
function pagos(){
    if (precioTotal === 0){
        alert(`No hay nada que tengas que pagar.`);
        codigoNormal = false;
    } else{
        let formaDePago = parseInt(prompt(`Con qué forma de pago desea abonar: \n1(Visa) \n2(Macro) \n3(Mercado Pago)`));
        if (formaDePago === 1){
            alert(`No tiene recargos.\nEl total de su compra es de $${precioTotal}`);
            alert(`Gracias por elegir nuestro negocio, esperamos verte por aqui de nuevo!`);
            codigoNormal = false;
        } else if(formaDePago === 2){
            let precioMacro = (precioTotal * 0.20) + precioTotal;
            alert(`Macro tiene un 20% de recargo.\nSuma de su compra antes de recargos: $${precioTotal}.\nEl total de su compra es de $${precioMacro}`);
            alert(`Gracias por elegir nuestro negocio, esperamos verte por aqui de nuevo!`);
            codigoNormal = false;
        } else if(formaDePago === 3){
            let precioMP = (precioTotal * 0.10) + precioTotal;
            alert(`Mercado Pago tiene un 10% de recargo.\nSuma de su compra antes de recargos: $${precioTotal}.\nEl total de su compra es de $${precioMP}`);
            alert(`Gracias por elegir nuestro negocio, esperamos verte por aqui de nuevo!`);
            codigoNormal = false;
        } else if(!formaDePago){
            alert("Has decidido volver atrás. No se ha realizado el pago.");
            codigoNormal = true
        } else{
            alert(`Método de pago no válido, por favor ingrese otro.`);
            pagos();
        }
    }
}

//Código normal

while (codigoNormal){
    let preguntaInicial = parseInt(prompt(`Bienvenido a Santo Bite, que deseas hacer hoy: \n1 (Comprar una hamburguesa) \n2 (Ir al carrito) \n3 (Agregar una hamburguesa al menú), \n4(Eliminar una hamburguesa del menú) \n5 (Finalizar la compra)`));
    if (preguntaInicial === 1){
        const nombreHamburguesa = prompt(`Genial, ¿cual hamburguesa quieres comprar?`);
        const cantHamburguesas = parseInt(prompt(`Cuántas deseas comprar?`));
        carrito(nombreHamburguesa, cantHamburguesas); // El resultado lo tengo que usar para comparar.
        console.log(carritodeCompras);
    } else if (preguntaInicial === 2){
        mostrarCarrito();
    } else if (preguntaInicial === 3){
        agregarHamburguesaAlArray();
        console.log(hamburguesas);
    } else if (preguntaInicial === 4){
        let preguntaEliminar = prompt(`Ingresa el nombre de la hamburguesa a eliminar:`);
        eliminarHamburguesaDelArray(preguntaEliminar);
        console.log(hamburguesas);
    } else if (preguntaInicial === 5){
        pagos();
    } else {
        alert(`Has elegido una opción no válida, intentelo otra vez.`);
    }
}
