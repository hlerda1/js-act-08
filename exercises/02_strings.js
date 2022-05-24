/*Ejercicio donde se crea una palabra en base a otra*/
var palabra = "apocalipsis"
var subpalabra = palabra.substring(0,5)
console.log(subpalabra)

/*Ejercicio, tomar una palabra y poner su primer letra en mayuscula*/
var palminusc = "eternamente"
var largopal = palminusc.length
var primerletra1 = (palminusc.substring(0,1)).toUpperCase()
var restopal = palminusc.substring(1,largopal)
var palmayusc = primerletra1.concat(restopal)
// console.log(largopal)
console.log(palmayusc)

/*Ejercicio Encontrar el numero de posiscion de un espacio en un string*/
var fraseespacio = "salsa caliente"
var posicionespacio = fraseespacio.indexOf(" ")
console.log(posicionespacio)