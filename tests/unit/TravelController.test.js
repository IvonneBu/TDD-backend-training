const TravelController = require("../../controller/TravelController");
const CountryController = require("../../controller/CountryController");
const countryData = require("../country-list-data.json");
const axios = require('axios');
const axiosGet = axios.get;

jest.mock('axios');
beforeEach(() => {
    axiosGet.mockReset();
  });

describe('TravelController', () => {
    test('should have a getListCountry function', () => {
        expect(typeof TravelController.getListCountry).toBe("function");
    });
    test('should return a json response from getCountryList', async() => {
        //arrange
        CountryController.getListCountry = jest.fn().mockReturnValue(countryData);
        const expectedCountryList = [{ 
            "name": "Afghanistan",
            "capital": "Kabul",
            "region": "Asia",
            "subregion": "Southern Asia",
            "flag": "https://restcountries.eu/data/afg.svg"},
            { 
                "name": "Åland Islands",
                "capital": "Mariehamn",
                "region": "Europe",
                "subregion": "Northern Europe",
                "flag": "https://restcountries.eu/data/ala.svg"}
        ]
        //act
        const cleanCountryList = await TravelController.getListCountry();
        //assert
        expect( cleanCountryList ).toEqual(expectedCountryList);
    });
    
});

