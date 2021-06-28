//supertest: test whole nodejs app
const request = require("supertest");
const app = require("../../app");
const newTravel = require("../travel-data.json")

const endpoint = "/travel/"

describe('Create travel endpoint', () => {
    test('should post a request to the /travel/ endpoint', async() => {
        const response = await request(app).post(endpoint)
        .send(newTravel);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTravel.title);
        expect(response.body.description).toBe(newTravel.description);
    });
    
});
