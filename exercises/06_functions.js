/*funcion de suma*/
function funcSuma(funcnum1, funcnum2) {
    return funcnum1 + funcnum2;
  }
var funcResult = funcSuma(13,7)
console.log(funcResult)

/*funcion de suma con verificación de numero*/
function funcSumaVer(funcNumVer1, funcNumVer2) {
    if(isNaN(funcNumVer1) || isNaN(funcNumVer2)){
        alert("Uno de los valores no es un numero")
    }
    else
    return funcNumVer1 + funcNumVer2;
  }
var funcResultVer = funcSumaVer("A",7)
console.log(funcResultVer)


/*funcion de suma con verificación de numero y redondeo de numero a enetero*/
function funcSumaVal(funcNumVal1, funcNumVal2) {
    if(isNaN(funcNumVal1) || isNaN(funcNumVal2)){
        alert("Uno de los valores no es un numero")
    }
    else{
        if(Number.isInteger(funcNumVal1) && Number.isInteger(funcNumVal2)){  
            return funcNumVal1 + funcNumVal2;                                      
                }
                else{
                    alert("Uno de los valores no es un entero, el sistema redondeara para la suma");
                    var x = Math.round(funcNumVal1);
                    var y = Math.round(funcNumVal2);
                    return x + y;
                }
            
    }
  }
var funcResultVal = funcSumaVal(2,7.9)
console.log(funcResultVal)