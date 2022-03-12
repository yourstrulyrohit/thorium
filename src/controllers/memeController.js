//3. Axios POST request assignment


let axios = require("axios");


let memeisworld = async function (req, res) {
    try {
      
      let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=othercodingcamp&text1=functionUp&username=chewie12345&password=meme@123`,
      };
      let result = await axios(options);
      console.log(result.data);
      res.status(200).send({ msg: result.data });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  };
  
  module.exports.memeisworld = memeisworld;