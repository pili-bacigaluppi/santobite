let hamburguesas = [
    { nombre: `Santo Tocino`, precio: 9800, },
    { nombre: `Angelito`, precio: 7500, },
    { nombre: `Cheddar Santo`, precio: 9500, },
    { nombre: `Doble Gloria`, precio: 11000, }
]; //No hacer este array const, por si después se quiere agregar una hamburguesa.
let carritodeCompras = []; // Vacío, porque después se llena.
let precioTotal = 0; // Se van a ir sumando a medida que elija hamburguesas.

//Funcion Carrito:
function carrito(preguntaHamburguesa){
    const prodSeleccionado = hamburguesas.find(hamburguesas => hamburguesas.nombre === preguntaHamburguesa);//Comparación, para despues usar un if.
    if(prodSeleccionado){
        carritodeCompras.push(prodSeleccionado);
        precioTotal += prodSeleccionado.precio;
        confirm(`El total de su compra es de: ${precioTotal}`);
        //AGREGAR UN CICLO FOR PARA QUE SIEMPRE INGRESE UN NOMBRE VÁLIDO.
    }else{
        alert(`Ha ocurrido un error, vuelve a intentar`);
    }
}

//Funcion Agregar una Hamburguesa al array:
function agregarHamburguesaAlArray(){
    let nombreHamburguesaNueva = prompt(`Ingresa el nombre de la nueva hamburguesa:`);
    let precioHamburguesaNueva = parseFloat(prompt(`Ingresa el precio de la nueva hamburguesa:`));
    if ( nombreHamburguesaNueva.trim() !== "" && precioHamburguesaNueva !== NaN){ //No debería aceptar un solo valor si el otro no esta, pero lo acepta igualmente.
        let hamburguesaNueva = { nombre: nombreHamburguesaNueva, precio: precioHamburguesaNueva};
        hamburguesas.push(hamburguesaNueva);
        alert(`La hamburguesa ha sido registrada correctamente`);
    } else {
        alert(`La hamburguesa no ha podido ser registrada correctamente`);
    };
}

//Código normal
alert(`Como todavía no tengo HTML, los nombres de las hamburguesas son: Santo Tocino, Angelito y Cheddar Santo. Acuerdatelos antes de pedir y escribelos bien, sin diferencias.`);

while (true){
    let preguntaInicial = parseInt(prompt(`Bienvenido a Santo Bite, que deseas hacer hoy: 1 (Comprar una hamburguesa), 2 (Agregar una hamburguesa al menú)`));
    if (preguntaInicial === 1){
        const preguntaHamburguesa = prompt(`Genial, cual hamburguesa quieres comprar?`);
        carrito(preguntaHamburguesa); // El resultado lo tengo que usar para comparar.
        console.log(carritodeCompras);
    } else if (preguntaInicial === 2){
        agregarHamburguesaAlArray();
        console.log(hamburguesas);
    } else{
        alert(`Has elegido una opción no válida, intentalo otra vez`);
    }
}
