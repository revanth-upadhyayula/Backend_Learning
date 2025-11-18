const express = require('express');

const app=express();


const port=3000;

function m1(req,res,next){ // next is a callback function
    console.log("In m1");
    // return res.json({message:"not OK"})
    next();
}

app.get('/', m1, (req, res) => {
    // everytime someone calls the /home route, this callback will be called
    console.log("/home called");

    console.log(req.url, req.query);

    return res.json({msg: 'ok'}); // here we are passing a js object
});


//* URL Params
//~ http://localhost:3000/products/12345/rating/4.5

app.get('/products/:product_id/rating/:rate', (req, res) => {
    // :id part is variable and products is static
    // :id part is your url params and overall these kind of routes are called as dynammic routes
    console.log(req.params);
    const pid = req.params.product_id;
    return res.json({productId: pid, rating: req.params.rate});
});

//* Query Params
//~ http://localhost:3000/users?sortby=age&order=asc
app.get('/users', (req, res) => {
    console.log(req.query);
    const sortBy = req.query.sortby;
    const order = req.query.order;
    return res.json({sortBy: sortBy, order: order});
});

// to handle post request and to read data from request body
app.use(express.json()); // middleware to parse json body  we can define it globally to all routes

//* Request Body
//~ http://localhost:3000/login
app.post('/login', (req, res) => {
    console.log(req.body); // req.body will contain the parsed body data
    const username = req.body.username;
    const password = req.body.password; 
    return res.json({username: username, password: password});
});     



app.listen(port,()=>{
    console.log("Server is running on port "+port);
})




// how can the client send custom data to the server
/**
 * 1. URL Params -- /products/7
 * 2. Query Params -- ?key1=value1&key2=value2&key3=value3
 * 3. Request Body
 * 
 */