//funciones



var nombre = 'Jefersson',
    edad = 40

var JeferssonObj = {
    name: 'Mi name',
    surname: 'Mi surname',
    age: '28'
}


var AlejandraObj = {
    name: 'Mi nameA',
    surname: 'Mi surnameA',
    age: 27
}

function PrintAge(n, e) {
    console.log(`${n} -  ${e} `)

}
// indicando la propiedad del objeto
function PrintAge_({
    name
}) {
    console.log(name)

}
PrintAge(AlejandraObj.name, JeferssonObj.name);

PrintAge_(AlejandraObj);

//En el navegador, window.variable global


function cumpleanos(persona) {
    persona.age += 1
}

console.log()



//funcion más pro, entonces recibo el obj, lo modifico, pero el original no, creo uno nuevo

function cumpleanos_pro(persona) {
    return {
        ...persona,
        age: persona.age + 1
    }

}



//comparaciones
var x = 4;
var y = '4';

x == y //true porque 4 en numero es igual 4 en string - los vuelve string y los compara

x === y //false porque un numero no es igual a un string - es buena practica usar ===

var andres = {
    nombre: "Andres"
}

var otraPersona = {
    nombre: "Andres"
}

andres == otraPersona //false

andres === otraPersona //false

//

var andres = {
    nombre: "Andres"
}

var otraPersona = andres

andres == otraPersona //true

andres === otraPersona //true

//

var andres = {
    nombre: "Andres"
}

var otraPersona = {
    ...andres //estamos desglosando el primer objeto y copiando sus atributos en el nuevo objeto
}

andres == otraPersona //false

andres === otraPersona //flase

//

var andres = {
    nombre: "Andres"
}

var otraPersona = andres

otraPersona.nombre = "Pepe"


//funciones mas pro
const esMenorDeEdad = persona => persona.edad < MAYORIA_DE_EDAD; //arrow functions es lo mismo que escribir la funcion de abajo

/*function esMayorDeEdad(persona)
{
  return persona.edad >= MAYORIA_DE_EDAD;
}*/

function imprimirSiEsMenorDeEdad(persona) {

    if (esMenorDeEdad(persona)) {
        console.log(`${persona.nombre} Es Menor de edad`)
    } else {
        console.log(`${persona.nombre} Es Mayor de edad`)
    }
}

//arays

var pedro = {
    nombre: "pedro’",
    apellido: "diaz",
    altura: 1.68
}

var enrique = {
    nombre: "enrique",
    apellido: "diaz",
    altura: 1.50
}

var jacke = {
    nombre: "jacke",
    apellido: "Ramirez",
    altura: 1.68
}

var andres = {
    nombre: "andres",
    apellido: "olaya",
    altura: 1.48
}

var alejandra = {
    nombre: "alejandra",
    apellido: "Ramirez",
    altura: 1.49
}

var personas = [pedro, enrique, jacke, andres, alejandra]
const bajosAltura = ({
    altura
}) => persona.altura < 1.50

var personasBajas = personas.filter(bajosAltura)

console.log(personasBajas)