const {crearArchivo} = require('./tabla');
var color = require('colors');

var base = process.argv[2].split('=')[1];

//console.log(base);

crearArchivo(base)
    .then( nombreArchivo => console.log(`Se ha creado el archivo ${nombreArchivo}`)
    )
    .catch(e => console.log('ERROR: '.red + e));
