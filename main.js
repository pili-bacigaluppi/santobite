let hamburguesas = [
    { nombre: `Santo Tocino`, precio: 9800, disponibles: 17},
    { nombre: `Angelito`, precio: 7500, disponibles: 11},
    { nombre: `Cheddar Santo`, precio: 9500, disponibles: 19},
    { nombre: `Doble Gloria`, precio: 11000, disponibles: 15}
]; //No hacer este array const, por si después se quiere agregar una hamburguesa.
let carritodeCompras = []; // Vacío, porque después se llena.
let precioTotal = 0; // Se van a ir sumando a medida que elija hamburguesas.
let codigoNormal = true; //Parámetro para que la funión termine.
//Funcion Carrito:
function carrito(preguntaHamburguesa){
    const prodSeleccionado = hamburguesas.find(hamburguesas => hamburguesas.nombre === preguntaHamburguesa);//Comparación, para despues usar un if.
    if (prodSeleccionado){
        carritodeCompras.push(prodSeleccionado);
        precioTotal += prodSeleccionado.precio;
        confirm(`El total de su compra es de: ${precioTotal}`);
        //AGREGAR UN CICLO FOR PARA QUE SIEMPRE INGRESE UN NOMBRE VÁLIDO.
    } else {
        alert(`No se ha podido encontrar esta hamburguesa en el catalogo, intenta otra vez.`);
    }
}

// Las funciones agregarHamburguesaAlArray y eliminarHamburguesaDelArray más adelante estaría habilitada solamente para los empleados del negocio y no para todos los usuarios.
//Funcion Agregar una Hamburguesa al array:
function agregarHamburguesaAlArray(){
    let nombreHamburguesaNueva = prompt(`Ingresa el nombre de la nueva hamburguesa:`);
    let precioHamburguesaNueva = parseFloat(prompt(`Ingresa el precio de la nueva hamburguesa:`));
    let cantHamburguesaNueva = parseInt(prompt(`Ingresa la cantidad de hamburguesas disponibles para vender:`));
    if ( nombreHamburguesaNueva.trim() !== "" && !isNaN(precioHamburguesaNueva) && !isNaN(cantHamburguesaNueva)){ //No debería aceptar un solo valor si el otro no esta, pero lo acepta igualmente.
        let hamburguesaNueva = { nombre: nombreHamburguesaNueva, precio: precioHamburguesaNueva, disponibles: cantHamburguesaNueva};
        hamburguesas.push(hamburguesaNueva);
        alert(`La hamburguesa ${nombreHamburguesaNueva} ha sido registrada correctamente`);
    } else {
        alert(`La hamburguesa no ha podido ser registrada correctamente`);
    };
}
function eliminarHamburguesaDelArray(preguntaEliminar){
    const posDeEliminar = hamburguesas.findIndex(hamburguesas => hamburguesas.nombre === preguntaEliminar); // Búsqueda de la hamburguesa a eliminar.
    console.log(posDeEliminar);
    if(posDeEliminar !== -1){
        let elementoEliminado = hamburguesas.splice(posDeEliminar, 1);
        alert(`La hamburguesa ${preguntaEliminar} ha sido eliminada correctamente.`);
    } else {
        alert(`La hamburguesa no se ha encontrado, ingresa el nombre de nuevo.`);
    }
}

//Código normal
alert(`Como todavía no tengo HTML, los nombres de las hamburguesas son: Santo Tocino, Angelito, Cheddar Santo y Doble Gloria. Acuerdatelos antes de pedir y escribelos bien, sin diferencias.`);

while (codigoNormal){
    let preguntaInicial = parseInt(prompt(`Bienvenido a Santo Bite, que deseas hacer hoy: 1 (Comprar una hamburguesa), 2 (Agregar una hamburguesa al menú), 4 (Finalizar la compra)`));
    if (preguntaInicial === 1){
        const preguntaHamburguesa = prompt(`Genial, cual hamburguesa quieres comprar?`);
        carrito(preguntaHamburguesa); // El resultado lo tengo que usar para comparar.
        console.log(carritodeCompras);
    } else if (preguntaInicial === 2){
        agregarHamburguesaAlArray();
        console.log(hamburguesas);
    } else if (preguntaInicial === 3){
        let preguntaEliminar = prompt(`Ingresa el nombre de la hamburguesa a eliminar:`);
        eliminarHamburguesaDelArray(preguntaEliminar);
        console.log(hamburguesas);
    } else if (preguntaInicial === 4){
        codigoNormal = false
        alert(`Gracias por elegir nuestro negocio, esperamos verte por aqui de nuevo!`)
    } else {
        alert(`Has elegido una opción no válida, intentalo otra vez`);
    }
}
