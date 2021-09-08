const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
const customThemes = require('./custom/color-themes');
colors.setTheme(customThemes);

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.fileName, 'creado!'.success ))
    .catch( err => console.log( colors.error(err) ));


//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b);


// const [ , ,arg3] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(base);


// const base = 10;