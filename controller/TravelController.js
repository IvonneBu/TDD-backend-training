const CountryController = require("../controller/CountryController")
const TravelModel = require("../model/Travel");

exports.getListCountry = async () => {
  const countryList = await CountryController.getListCountry();
  return cleanUpList(countryList)
}
exports.createTravel = async (req, res, next) => {
  const createdTravel = await TravelModel.create(req.body);
  res.status(201).json(createdTravel);
}
const cleanUpList = (countryList) => {
  let cleanCountryList = countryList.map(country => {
    let single = {
      "name": country.name,
      "capital": country.capital,
      "region": country.region,
      "subregion": country.subregion,
      "flag": country.flag
    }
    return single
  });
  return cleanCountryList
}

exports.getTravels = async (req, res) => {
  const allTravels = await TravelModel.find({});
  res.status(200).json(allTravels);
}