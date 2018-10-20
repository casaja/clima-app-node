const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=910aec98d1b3b898f875d7ecaa73d10e`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}