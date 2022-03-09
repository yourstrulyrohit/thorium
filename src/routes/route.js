const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const GM =require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts",GM.authenticate, userController.postMessage)
router.put("/addpost/:userId", GM.authenticate, userController.createPost)

router.put("/users/:userId",GM.authenticate, userController.updateUser)
router.delete('/users/:userId', GM.authenticate,userController.deleteUser)

module.exports = router;