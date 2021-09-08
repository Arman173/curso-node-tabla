const fs = require('fs'); // importing file system
const colors = require('colors');
const customThemes = require('../custom/color-themes');
colors.setTheme(customThemes);

const crearArchivo = async( base = 1, listar = false, hasta = 10) => {

    try{
        let salida = '===================\n    Tabla del ' + base + '    \n===================\n';
        let salidaLog = '';
        
        for(let i = 1; i <= hasta; i++){
            let resultado = base * i;
            salida += `${ base } x ${ i } = ${ resultado }\n`;
            salidaLog += `${ colors.base(base) } ${ 'x'.green } ${ colors.bold(i) } ${ '='.green } ${ colors.result(resultado) }\n`
            // colors.base(base) + ' x '.green + colors.bold(i) + ' = '.green + colors.result(resultado) + '\n'
        }

        if (listar) {
            console.log('===================\n    Tabla del '.green + colors.base(base)
                    + '    \n===================\n'.green);
            console.log(salidaLog);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return `tabla-${ base }.txt`;
    }
    catch( err ){
        throw err;
    }
}

module.exports = {
    crearArchivo
}
