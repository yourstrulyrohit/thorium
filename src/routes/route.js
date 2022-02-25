const express = require('express');
const router = express.Router();
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
   router.post("/postquery", function (req, res) {
    
      let votingAge = req.query.age;
      let validVoters = [];
  
       for (let i = 0; i < persons.length; i++) {
  
         if (persons[i]["age"] > votingAge) {
            persons[i]["votingStatus"] = true;
             validVoters.push(persons[i]);
           }
  
       }
  
       res.send(validVoters);;
    



 })
 
 module.exports = router;
