// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:  
    return str;
  }

  devolverString('hola');
  
  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    var suma = x + y;
    return suma;
  }
  
  suma(12, 24);

  function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    var resta = x - y;
    return resta;
  }
  resta(234, 104);
  
  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    var multiplica = x * y;
    return multiplica;
  }
  multiplica(2,5);

  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    var divide = x / y;
    return divide;
  }
  divide(25,5);
  
  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if(x == y){
      return true;
    } else {
      return false;
    }
    
  }

  sonIguales(2, 2);
  
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length === str2.length){
      return true;
    } else {
      return false;
    }
  }
  tienenMismaLongitud('hola', 'dulce');
  
  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num < 90){
      return true;
    } else {
      return false;
    };
  }
  menosQueNoventa(102);

  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num > 50){
      return true;
    } else {
      return false;
    };
  }
  mayorQueCincuenta(102);

  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    var obtenerResto = x % y;
    return obtenerResto;
  }
  obtenerResto (24,6);

  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 == 0){
      return true;
    } else {
      return false;
    }
  }
  esPar(4);
  
  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num % 2 != 0){
      return true;
    } else {
      return false;
    }
  }
  esImpar(7);

  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    var resultado = num * num;
    return resultado

  }
  elevarAlCuadrado(9);
  
  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    var resultado = num * num * num;
    return resultado
  }
  elevarAlCubo(6);

  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    var resultado = num ** exponent;
    return resultado;
  }
  elevar(5,5);
  
  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    var respuesta = Math.round(num);
    return respuesta;
  }
  redondearNumero(2.4);
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    var respuesta = Math.ceil(num);
    return respuesta;
  }
  redondearHaciaArriba(25.2);
  
  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
    
    return Math.random();
  }
  numeroRandom();
  
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if (numero > 0){
      return "Es positivo"
    } else if(numero < 0){
      return "Es negativo"
    } else {
      return false
    }
  }
  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    var resultado = str + '!';
    return resultado;
  }
  agregarSimboloExclamacion("hola a todo");
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    var resultado = nombre + " " + apellido;
    return resultado;
  }
  combinarNombres('Facundo', 'Revol');
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    var resultado = `Hola ${nombre}!` ;
    return resultado;
  }
  obtenerSaludo('Enrique');
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    var Area = alto * ancho;
    return Area;
  }
  obtenerAreaRectangulo(5, 9);
  
  function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    var perímetro = lado + lado + lado + lado;
    return perímetro;
  }
  retornarPerimetro(4);
  
  function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    var areaDelTriangulo = (base * altura)/2;
    return areaDelTriangulo;
  }
  areaDelTriangulo(23, 23);
  
  function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    var respuesta = euro * 1.2;
    return respuesta;
  }
  deEuroAdolar(123)
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };