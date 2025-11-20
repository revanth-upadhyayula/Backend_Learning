const express = require('express');
const router = express.Router();
const {getProduct} = require("../../controllers/getProduct.controller");
router.get('/products/:id', getProduct);

module.exports=router