function homePing(req,res){

    /* 
       & Collect the request
       & send it to service
       & and then prepare and send response 
    */
    return res.json({msg:'ok'});
}

module.exports={
    homePing
}