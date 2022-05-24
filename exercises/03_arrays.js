/*Crear una lista secundaria de los meses 5 y 11*/
const listameses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const sublist5_11 = [listameses[4],listameses[10]]
console.log(sublist5_11)

/*ordenar lista alfabeticamente*/
const listamesesalfabeticamente = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
listamesesalfabeticamente.sort()
console.log(listamesesalfabeticamente)

/*agrregar elementos al principio y final de la lista*/
listameses.push("megadiciembre")
listameses.unshift("subenero")
console.log(listameses)

/*Quitar elemetos del principio y del final*/
listameses.shift()
listameses.pop()
console.log(listameses)

/*Revertir orden del array*/
listameses.reverse()
console.log(listameses)

/*Elementos unidos por un guion*/
listameses.reverse()
var listamesesstring = listameses.join(" - ")
console.log(listamesesstring)

/*Copia del array que conenga desde mayo hasta noviembre*/
var listacortada = listameses.slice(4,11) //funciona similar a substring
console.log(listacortada)
