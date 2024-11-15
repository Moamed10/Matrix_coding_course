const isloggedin = (req,res,next)=>{

    if(req.cookies.token){
        next()
    }else{
        res.redirect("/users-signup")
    }
}

const enabellogin = (req,res,next)=>{

    if(req.cookies.token){
        res.redirect("/users")
    }else{
        next()
    }
}


module.exports = {
    isloggedin,
    enabellogin,

}