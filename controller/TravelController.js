const CountryController = require("../controller/CountryController")

exports.getListCountry = async () => {
    const countryList = await CountryController.getListCountry();
    return  cleanUpList(countryList)
}

const cleanUpList = ( countryList ) => {
  let  cleanCountryList = countryList.map(country => {
        let single = {
            "name" : country.name,
            "capital": country.capital,
            "region": country.region,
            "subregion" : country.subregion,
            "flag" : country.flag
        }
        return single
    });
    return cleanCountryList
}