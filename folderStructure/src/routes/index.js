const express = require("express");
const { homePing } = require("../controllers/home.controller");
const v1Router= require("./v1");
const v2Router= require("./v2");
const router = express.Router();
router.use('/v1',v1Router)  // /v1/products/:id
router.use('/v2',v2Router)  // /v2/products/:id

// router.get('/', homePing)
// router.get('/home', homePing) // /home

module.exports=router