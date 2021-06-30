const axios = require('axios');

exports.getListCountry = async() => {
    const countryList = await axios.get('https://restcountries.eu/rest/v2/all');
    return countryList.data;
};

exports.getCountryByCode = async(code) => {
    const singleCountry = await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
    return singleCountry.data;
}