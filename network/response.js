exports.success = function(req, res, message, status){
    res.status(status||200).send({
        error:'',
        body:message
     });
} 

exports.error = function(req, resp, message, status, details){
    console.log('[Error Response]: '+details);
    resp.status(status||500).send({
        error:message,
        body:''
     });
    
} 
