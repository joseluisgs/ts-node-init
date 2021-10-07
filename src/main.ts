// Zona de declaración de librerías y módulos propios o del sistema
import read from 'readline-sync';
import chalk from 'chalk';

console.log("Hola 1DAM");

let edad = read.questionInt("¿Cuál es tu edad? ");

console.log(chalk.blue("Tu edad es: " + edad));
