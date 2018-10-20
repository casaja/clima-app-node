const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direcion) => {

    try {
        let coors = await lugar.getLugarLatLng(direcion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${ coors.dirección} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar la temperatura en ${direcion}`
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));