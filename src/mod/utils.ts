
/**
 * Funcion que devuelve si un numero es primo o no
 * @param num Numero para saber si es primo
 * @returns Verdadero si es primo
 */
function esPrimo(num: number): boolean {
  let esPrimo = true;
  // Es divisible entre 2
  if(num % 2 == 0) {
    esPrimo = false;
  }

  // Recorremos los impares
  for(let i = 3; i <= Math.sqrt(num) && esPrimo; i+=2 ) {
    if (num % i == 0) {
      esPrimo = false;
    }
  }
  return esPrimo;
}

function presentacion() {
  console.log("Usando librería de números primos");
}

// Exportamos las funciones que queramos que sea publicas
export default { esPrimo, presentacion };
