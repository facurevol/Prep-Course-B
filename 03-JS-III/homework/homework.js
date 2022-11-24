// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
   var num = [1,2,3,4,5,6,7,8,9,10];
   var suma = num.reduce(function(acc, e){
    return acc + e;
   });
   return suma;
}
imprimirSumaNumeros([1,2,3,4,5,6,7,8,9,10]);

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = array.filter(e => e%2 == 0)
   return pares;
};
encuentraPares([1,2,3,4,5,6,7,8,9,10]);

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arrayAlCuadrado = array.map(e => e ** 2)
  return arrayAlCuadrado; 
};
elevaAlCuadrado([1,2,3,4]);

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
   var suma = array.reduce(function(acc, e){
    return acc + e;
   });
   return suma;
}
sumaArray([1,25,38,4]);

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length; 
}
numeroDigitos(1230);
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
