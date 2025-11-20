function getProduct(req,res){
    /* 
       & Collect the request
       & send it to service
       & and then prepare and send response 
    */
    const productId=req.params.id;
    // logic to get product from db or service
    return res.json({productId:productId, name:"Sample Product"});
}

module.exports={
    getProduct
}