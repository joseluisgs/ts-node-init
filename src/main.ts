// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

// Zona de declaración de variables y constantes
let edad = 10;
let nombre, apellido: string;
const NUM_PI = 3.14;

// Salida de texto
console.log(edad);
console.log(edad + 1);

// Salida con colores
console.log(chalk.blue('Hola') + ' Clase' + chalk.red('!'));

// Entrada de texto
nombre = read.question('¿Cómo te llamas? ');
console.log('Tu nombre: ' + nombre);

apellido = read.question("¿Cuál es tu apellido? ");
console.log('Tu apellido: ' + apellido);

console.log('Imprimo una constante: ' + NUM_PI);

console.log(chalk.blue.bgYellowBright.bold('¡Hola: ' + nombre + ' ' + apellido + '!'));

// Esto es un comentario de una línea de código
// Si quiero comentar varias líneas debo poner // en cada una de de ellas

/*
  Esto es un comentario de bloque de código
  Si quiero comentar varias líneas debo poner /* en cada una de de ellas
  Y cerrarlo con 
*/
