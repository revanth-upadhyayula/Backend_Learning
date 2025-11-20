const express = require("express");
const { homePing } = require("../controllers/home.controller");

const router = express.Router();

router.get('/custom', homePing)
router.get('/custom2', homePing) // /custom2

module.exports=router