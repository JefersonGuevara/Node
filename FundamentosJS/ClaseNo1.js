console.log('Hola Mundo');
var nombre = 'doremi';
//Mayusculas  y minusculas

function printconsole(nombre) {
    console.log('Hola Mundo, te saludo a ti ' + nombre.toUpperCase());
    console.log('Hola Mundo, te saludo a ti ' + nombre.toLowerCase());
    //cantidad de letras de la variable
    console.log('Hola Mundo, te saludo a ti ' + nombre.length + ' :D');
    //interpolarvariables
    console.log(`${nombre.toUpperCase()}, Si soy aprendiendo un poco, repasando`);
    //manjeo de substring
    var str = nombre.charAt(1) + nombre.charAt(3) + '!!! sapo hp';
    console.log(str);
    //origen, caracteres
    str = nombre.substr(2, 5);
    console.log(str);



};
printconsole(nombre);


console.log('Its fine at first class of fundamentals Js');

/*var Name_to_verify = prompt('what is your name?');
var lastword = Name_to_verify.charAt(nombre.length - 1);
console.log(`Your last letter was ${lastword}`);
*/

var priceofbeer = 200.3;

var total = Math.round(priceofbeer * 100 * 3) / 100;

//define cuantos decimales despues del punto
total = total.toFixed(4);
totaldecimal = parseFloat(total)