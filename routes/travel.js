var express = require('express');
const travelController = require("../controller/TravelController")
var router = express.Router();

router.get('/countries', travelController.getListCountry);

module.exports = router;