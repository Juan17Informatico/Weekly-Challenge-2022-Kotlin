/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 */

const esBisiesto = (year) => {
    return ((year % 4 === 0  &&  year % 100 !== 0) ||  (year % 400 === 0)); 
}

const calcularBisiesto = (year) => {

    if (!esBisiesto(year)) {
        return "Error: debes ingresar un año bisiesto"
    }

    const proximosBisiestos = [];

    for (let i = 1; i <= 30; i++) {
        
        if (esBisiesto(year + 4)) {
            proximosBisiestos.push(year + 4);
            year += 4;
        } else if (esBisiesto(year + 8)) {
            proximosBisiestos.push(year + 8);
            year += 8;
        }
        
    }

    return proximosBisiestos;

}

console.log(calcularBisiesto(2024));
console.log(calcularBisiesto(2000));
console.log(calcularBisiesto(1900));