const TravelController = require("../../controller/TravelController");
const CountryController = require("../../controller/CountryController");
const countryData = require("../country-list-data.json");
const TravelModel = require("../../model/Travel");
const httpMocks = require("node-mocks-http");
const axios = require('axios');
const axiosGet = axios.get;
const newTravel = require("../travel-data.json")

jest.mock('axios');
TravelModel.create = jest.fn();
let req, res, next;
beforeEach(() => {
    axiosGet.mockReset();
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
  });

describe('TravelController: External Countries API', () => {
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
        await TravelController.getListCountry(req,res,next);
        //assert
        expect(res._getJSONData()).toEqual(expectedCountryList);
    });
});
describe('TravelController: Travel entries create', () => {
    test('should call TravelModel.create', async() => {
        req.body = newTravel;
        await TravelController.createTravel(req, res, next);
        expect(TravelModel.create).toBeCalledWith(newTravel);
    });

    test('should return 201 response code', async () => {
        req.body = newTravel;
        await TravelController.createTravel(req,res,next);
        expect(res.statusCode).toBe(201);
    });
    
    test('should return json body in response', async () => {
        TravelModel.create.mockReturnValue(newTravel);
        await TravelController.createTravel(req,res,next);
        expect(res._getJSONData()).toEqual(newTravel);
    });
    
});
