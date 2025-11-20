const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server.config');
const router = require('./routes');
const customRouter= require('./routes/customRoutes')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
// app.use('/api',router) //localhost:3000/api/home
// app.use('/custom',customRouter) //localhost:3000/custom/custom2
/* *
 * How will u manage these kind of routes using express router ? 
 * 
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 *  localhost:3000/api/v2/categories/:id
 * localhost:3000/api/v2/users/:id
*/
app.use('/api',router) //localhost:3000/api/v1/products/:id



app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})