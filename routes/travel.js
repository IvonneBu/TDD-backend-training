var express = require('express');
const travelController = require("../controller/TravelController")
var router = express.Router();

router.post('/', travelController.createTravel);
router.get('/', travelController.getTravels);
router.get('/countries', travelController.getListCountry);

module.exports = router;