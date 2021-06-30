var express = require('express');
const travelController = require("../controller/TravelController")
var router = express.Router();

router.post('/', travelController.createTravel);
router.get('/', travelController.getTravels);

module.exports = router;