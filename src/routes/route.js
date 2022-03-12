const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController=require("../controllers/memeController")
const weatherController=require("../controllers/weatherController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
//1
router.get("/cowin/getByDistrict",CowinController.getbyDistrictSession)
//2
router.get("/getweathertemp",weatherController.getweather)
//3
router.post("/getmymeme",memeController.memeisworld)




module.exports = router;