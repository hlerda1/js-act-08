/*Bucle que recorre un array*/
const listaBucle = ["pajaro","canino","lagarto","bacteria","virus"]
for (let i = 0; i < listaBucle.length; i++){
    alert(listaBucle[i])
}

/*Blucle que pone la primera letra de cada palabra en el array en Mayúscula*/
for (let i = 0; i < listaBucle.length; i++){
    var largelem = listaBucle[i].length
    var primletelem = (listaBucle[i].substring(0,1)).toUpperCase()
    var restelem = listaBucle[i].substring(1,largelem)
    var elemmayus = primletelem.concat(restelem)
    alert(elemmayus)
}

var arrayvacio = []
for (let i = 0; i < 10; i++){
    arrayvacio.push(i)
}
console.log(arrayvacio)