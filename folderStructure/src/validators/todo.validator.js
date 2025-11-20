function createValidator(req, res, next){

    if(!req.body.todo) 
    {
        return res.json({error:"Todo data is required"});
    }

    next();
}

module.exports={
    createValidator
}