const math = {}

function sumar(i,i2){
    return i + i2
}
function restar(i,i2){
    return i - i2
}
function dividir(i,i2){
    return (i2 > 0)? i / i2: "no se puede dividir por 0";
}
function multiplicar(i,i2){
    return i * i2
}

math.sumar = sumar
math.restar = restar
math.dividir =dividir 
math.multiplicar = multiplicar

module.export = math 

// exports.sumar = sumar
// exports.restar = restar
// exports.dividir =dividir 
// exports.multiplicar = multiplicar