// Solicitar al usuario que responda a la pregunta
var respuesta = prompt("¿Eres bellisimo/a?");

// Verificar la respuesta utilizando un condicional
if (respuesta.toLowerCase() === "si") {
    // Si la respuesta es "sí"
    alert("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
    // Si la respuesta es "no"
    alert("No te creo");
} else {
    // Si la respuesta no es ni "sí" ni "no"
    alert("Respuesta no válida");
    
}

// Solicitar al usuario un número
var numero = prompt("Ingresa un número:");

// Convertir la entrada a un número (ya que prompt devuelve una cadena)
numero = parseFloat(numero);

// Verificar si el número es divisible entre 2 utilizando el operador de módulo (%)
if (numero % 2 === 0) {
    // Si el residuo es cero, entonces es divisible entre 2
    alert(numero + " es divisible entre 2");
} else {
    // Si el residuo no es cero, entonces no es divisible entre 2
    alert(numero + " no es divisible entre 2");
}

// Solicitar al usuario un número
var numero = prompt("Ingresa un número:");

// Convertir la entrada a un número (ya que prompt devuelve una cadena)
numero = parseFloat(numero);

// Verificar si el número es par utilizando el operador de módulo (%)
if (numero % 2 === 0) {
    // Si el residuo es cero, entonces es un número par
    alert(numero + " es un número par");
} else {
    // Si el residuo no es cero, entonces es un número impar
    alert(numero + " no es un número par");

}
// Solicitar al usuario un número de cliente
var numeroCliente = prompt("Ingrese su número de cliente:");

// Convertir la entrada a un número (ya que prompt devuelve una cadena)
numeroCliente = parseInt(numeroCliente);

// Verificar si el número de cliente es igual a 1000
if (numeroCliente === 1000) {
    // Si es igual a 1000, mostrar el mensaje de premio
    alert("¡Ganaste un premio!");
} else 
    // Si no es igual a 1000, mostrar el número y el mensaje de seguir participando
    alert("Lo sentimos, su número de cliente es: " + numeroCliente + "\nSigue participando.");

    // Solicitar al usuario que ingrese el primer número
var numero1 = prompt("Ingrese el primer número:");

// Convertir el input a un número
numero1 = parseFloat(numero1);

// Solicitar al usuario que ingrese el segundo número
var numero2 = prompt("Ingrese el segundo número:");

// Convertir el segundo input a un número
numero2 = parseFloat(numero2);

// Verificar cuál de los dos números es menor
if (numero1 < numero2) {
    alert("El primer número es menor: " + numero1);
} else if (numero2 < numero1) {
    alert("El segundo número es menor: " + numero2);
} else 
    alert("Los números son iguales, por favor ingrese números distintos.");

//6
    // Solicitar al usuario que ingrese tres números
let num1 = prompt("Por favor, ingresa el primer número");
let num2 = prompt("Por favor, ingresa el segundo número");
let num3 = prompt("Por favor, ingresa el tercer número");

// Convertir las entradas del usuario a números
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

// Determinar y mostrar cuál de los tres números es el mayor
if (num1 >= num2 && num1 >= num3) {
    alert("El número mayor es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    alert("El número mayor es: " + num2);
} else {
    alert("El número mayor es: " + num3);
}

//7
// Solicitar al usuario que ingrese un día de la semana (NO SIRVIO)
var diaSemana= prompt("Ingrese un día de la semana:");

// Convertir a minúsculas para hacer la comparación de manera insensible a mayúsculas
diaSemana= diaSemana.toLowerCase();

// Verificar el día de la semana e imprimir mensajes correspondientes
if (diaSemana === "lunes") {
    alert("Es lunes, A darle con todo.");
} else if (diaSemana === "viernes") {
    alert("¡Es viernes y el cuerpo lo sabe!");
} else if (diaSemana === "sabado" || diaSemana === "domingo") {
    alert("¡Es fin de semana!");
} else {
    alert("No es ni lunes, ni viernes, ni fin de semana.");
}


//8
// Solicitar al usuario que ingrese una calificación
var calificacion = prompt("Ingrese una calificación (entre 1 y 10):");

// Convertir la calificación a un número
calificacion = parseFloat(calificacion);

// Verificar si la calificación está en el rango correcto
if (calificacion >= 1 && calificacion <= 10) {
    // Evaluar la calificación y mostrar el mensaje correspondiente
    if (calificacion < 6) {
        alert("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        alert("Regular");
    } else if (calificacion === 9) {
        alert("Bien");
    } else if (calificacion === 10) {
        alert("Excelente");
    }
} else {
    // Mostrar un mensaje de error si la calificación está fuera del rango
    alert("Error: La calificación debe estar entre 1 y 10.");
}

//9

// Solicitar al usuario que elija un topping
var toppingElegido = prompt("Seleccione un topping para su helado (oreo, KitKat, brownie):");

// Precio base del helado sin topping
var precioBaseHelado = 50;

// Determinar el precio del topping elegido
var precioTopping;

switch (toppingElegido.toLowerCase()) {
    case "oreo":
        precioTopping = 10;
        break;
    case "kitkat":
        precioTopping = 15;
        break;
    case "brownie":
        precioTopping = 20;
        break;
    default:
        // Mostrar mensaje si el topping no está disponible
        alert("No tenemos este topping, lo sentimos.");
        precioTopping = 0;  // Precio del topping no disponible
}

// Calcular el costo total del helado
var costoTotalHelado = precioBaseHelado + precioTopping;

// Mostrar el costo total al usuario
if (precioTopping !== 0) {
    alert("El helado con topping de " + toppingElegido + " cuesta " + costoTotalHelado + " MXN.");
} else {
    alert("El helado sin topping cuesta " + costoTotalHelado + " MXN.");
}

//10
// Solicitar al usuario que elija el nivel de educación
var nivelEducacion = prompt("Seleccione el nivel de educación (Course, Carrera, Master):");

// Solicitar al usuario que indique si cuenta con alguna beca
var tieneBeca = prompt("¿Cuenta con alguna beca? (Sí/No):");

// Definir los costos mensuales para cada nivel de educación
var costoMensual;

switch (nivelEducacion.toLowerCase()) {
    case "course":
        costoMensual = 4999;
        duracionCurso = 2;
        break;
    case "carrera":
        costoMensual = 3999;
        duracionCurso = 6;
        break;
    case "master":
        costoMensual = 2999;
        duracionCurso = 12;
        break;
    default:
        // Mostrar mensaje si el nivel de educación no es válido
        alert("El nivel de educación ingresado no es válido.");
        costoMensual = 0;  // Precio no válido
}

// Aplicar descuento según la beca seleccionada
var porcentajeDescuento = 0;

if (tieneBeca.toLowerCase() === "si") {
    var tipoBeca = prompt("Seleccione el tipo de beca (Facebook, Google, Jesua):");
    switch (tipoBeca.toLowerCase()) {
        case "facebook":
            porcentajeDescuento = 20;
            break;
        case "google":
            porcentajeDescuento = 15;
            break;
        case "jesua":
            porcentajeDescuento = 50;
            break;
        default:
            // Mostrar mensaje si el tipo de beca no es válido
            alert("El tipo de beca ingresado no es válido.");
    }
}

// Calcular el costo mensual con descuento
var costoMensualConDescuento = costoMensual - (costoMensual * (porcentajeDescuento / 100));

// Calcular el costo total del curso
var costoTotalCurso = costoMensualConDescuento * duracionCurso;

// Mostrar el costo mensual con descuento y el costo total al usuario
if (costoMensual !== 0) {
    alert("El costo mensual con descuento es: " + costoMensualConDescuento + " MXN.");
    alert("El costo total del curso es: " + costoTotalCurso + " MXN.");
}

//11

// Precios por kilómetro según el tipo de vehículo
let preciosPorKilometro = {
    'coche': 0.20,
    'moto': 0.10,
    'autobús': 0.5
}

// Solicitar al usuario el tipo de vehículo y la distancia recorrida

let tipoVehiculo = prompt("Introduce el tipo de vehículo (coche, moto, autobús):").toLowerCase();
let distanciaRecorrida = parseFloat(prompt("Introduce la distancia recorrida en kilómetros:"));
let litrosConsumidos = parseFloat(prompt("Introduce los litros de combustible consumidos:"));
// Solicitar al usuario el tipo de vehículo y la distancia recorrida

// Calcular el precio por kilómetro
let precioKilometro = preciosPorKilometro[tipoVehiculo];

// Determinar el extra por litros consumidos
let extraPorLitros;
if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    extraPorLitros = 5;
} else {
    extraPorLitros = 10;
}

// Calcular el total a pagar
let totalAPagar = (precioKilometro * distanciaRecorrida) + extraPorLitros;

// Mostrar el total a pagar
alert("El total a pagar es: $" + totalAPagar.toFixed(2)+ " MXN");
       














