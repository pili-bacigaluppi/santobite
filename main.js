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
        confirm(`Deseas pagar esta/s hamburguesa/s? Su valor es de: ${precioTotal}`);
        //AGREGAR UN CICLO FOR PARA QUE SIEMPRE INGRESE UN NOMBRE VÁLIDO.
    }else{
        alert(`Ha ocurrido un error, vuelve a intentar`);
    }
}
//Funcion Agregar una Hamburguesa al array:
//Código normal
alert(`Como todavía no tengo HTML, los nombres de las hamburguesas son: Santo Tocino, Angelito y Cheddar Santo. Acuerdatelos antes de pedir y escribelos bien, sin diferencias.`);
const preguntaHamburguesa = prompt(`Bienvenido, cual hamburguesa quieres comprar?`);
carrito(preguntaHamburguesa); // El resultado lo tengo que usar para comparar.
console.log(carritodeCompras);