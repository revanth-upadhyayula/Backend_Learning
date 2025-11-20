const express = require("express");
const {getProduct} = require("../../controllers/getProduct.controller");
const todoRouter = require("./todo.routes");
const router=express.Router()


router.use('/todos', todoRouter);

module.exports=router