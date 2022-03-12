//2

let axios = require("axios");

let getweather = async function (req, res) {
    try {
      let cities = [
        "Bengaluru",
        "Mumbai",
        "Delhi",
        "Kolkata",
        "Chennai",
        "London",
        "Moscow",
      ];
      let ObjArr = [];
  
      for (i = 0; i < cities.length; i++) {
        let Obj = { city: cities[i] };
  
        let result = await axios(
          `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a9fb2f028e3f3282764e0461caceb412`
        );
  
        console.log(result.data.main.temp);
  
        Obj.temp = result.data.main.temp;
        ObjArr.push(Obj);
      }
      let sorted = ObjArr.sort((a, b) => a.temp - b.temp);
      console.log(sorted);
  
      res.status(200).send({ status: true, data: sorted });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  };
  
  
  
  module.exports.getweather = getweather;