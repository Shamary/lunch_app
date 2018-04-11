exports.checkMenuAuth=function(req,res,next)
{
    if(!req.session.fUser)
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
    req.session.fUser=null;
    res.send("200 OK");
    //res.redirect('/');
}