const request = require("supertest");
const app = require("../../app");
const newTravel = require("../travel-data.json");
const mockMongoDb = require("../../mongodb/mongodb.mock.connect");
const TravelModel = require("../../model/Travel");

const endpoint = "/travel/"

describe('Create travel endpoint', () => {
    beforeAll(async () => {
        await mockMongoDb.connect();
      });
      afterAll(async () => {
            await mockMongoDb.closeDatabase();
        });
    test('should post a request to the /travel/ endpoint', async() => {
        const response = await request(app).post(endpoint)
        .send(newTravel);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTravel.title);
        expect(response.body.description).toBe(newTravel.description);
    });
});

describe('Get travels endpoint', () => {
    beforeAll(async () => {
        await mockMongoDb.connect();
        initializeTravels();
    });

    afterAll(async () => {
        await mockMongoDb.closeDatabase();
    });
    test('should get a request to the /travel/ endpoint', async () => {
        const response = await request(app).get(endpoint).send();
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0].title).toBe(newTravel.title);
        expect(response.body[0].description).toBe(newTravel.description);
    });
});

const initializeTravels = async () => {
    await TravelModel.create(newTravel);
    await TravelModel.create({    
        "title" : "My amazing experience in Mexico",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia",
        "country" : "Mexico",
        "code" : "MX"});
}