/**
 * Tabla de multiplicar, base 2
 */

const { argv } = require('./config/yargs');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); 

const colors = require('colors');

let comando = argv._[0].toLowerCase();

switch( comando ){
    case 'listar':
        listarTabla(argv.b, argv.l);
    break;
    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}



// let base = 'ab5c';

// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv);
// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(base);


