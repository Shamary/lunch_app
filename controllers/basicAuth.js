exports.checkMenuAuth=function(req,res,next)
{
    if(!req.body.user)
    {
        res.redirect('/');
    }
    else
    {
        next();
    }
}

exports.logout = function(req,res)
{
    req.body.user=null;
    res.send("200 OK");
    //res.redirect('/');
}