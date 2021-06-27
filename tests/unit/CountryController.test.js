const CountryController = require("../../controller/CountryController");
const axios = require('axios');
const axiosGet = axios.get;
const countryData = require("../country-list-data.json");
const singleCountryData = require("../country-data.json");
const { expect } = require("@jest/globals");

jest.mock('axios');
beforeEach(() => {
    axiosGet.mockReset();
  });
describe('CountryController', () => {
    test('should have a getListCountry function', () => {
        expect(typeof CountryController.getListCountry).toBe("function");
    });
    test('should return a json response getListCountry', async () => {
        //arrange
        axiosGet.mockResolvedValue(countryData);
        //act
        const returnedCountryResponse = await CountryController.getListCountry();
        //assert
        expect(returnedCountryResponse).toEqual(countryData);
    });
    test('should have a getCountryByCode function', () => {
        expect( typeof CountryController.getCountryByCode).toBe("function");
    });
    test('should return a json response in getCountryByCode', async () => {
        axiosGet.mockResolvedValue(singleCountryData);

        const returnedSingleCountryResponse = await CountryController.getCountryByCode('ec');

        expect(returnedSingleCountryResponse).toEqual(singleCountryData);
    });
    
});
