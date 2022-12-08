const User = require('../modals/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require('../modals/User')
const jwt_secret_key = "Mykey"


const signup = async (req, res) =>{
    const {name, email, password} = req.body
    let existinguser ;
    try{
        existinguser = await User.findOne({email:email})
    }catch(err){
        console.log(err)
    }
    if(existinguser) {
        return res.status(400).json("User Already Exists! Login Instead")
    }
    const hashpassword = bcrypt.hashSync(password)

    const user = new User ({
         name,email,
         password : hashpassword
    })

    try {
        await user.save()
    }
    catch (err) {
        console.log(err)
    }
    return res.status(201).json(
         user
    )
}

const login = async (req, res) => {
    const {email, password} = req.body

    let existinguser;
    try{
        existinguser = await User.findOne({email:email})
    }
    catch(err){
       return new Error(err)
    }
    if(!existinguser){
        return res.status(400).json("User not Found, PLease Signup")
    }
    const isPassword = bcrypt.compareSync(password, existinguser.password)
    if(!isPassword){
        return  res.status(400).json("Invalid Email or Password")
    }
    const token = jwt.sign({id:existinguser._id}, jwt_secret_key,{
        expiresIn:"60s"
    })

    res.cookie(String(existinguser._id),token,{
        path: '/',
        expires : new Date(Date.now()+1000*30),
        httpOnly : true,
        sameSite: "lax"
    })
    
    return res.status(200).json({message :"User Successfully Logged In", user:existinguser,token})
}

const verifytoken = (req, res,next) =>{
    const cookies = req.headers.cookie
    const token = cookies.split("=")[1]
    console.log(token)
    // const headers = req.headers[`authorization`]
    // const token = headers.split(" ")[1]
    if(!token){
        res.status(404).json("No token found")
    }
    jwt.verify(String(token),jwt_secret_key,(err,user)=>{
         if(err){
            return res.status(400).json("Invalid Token")
         }
        console.log(user.id)
        req.id = user.id
    })
    next()
}

const getUser = async (req, res) =>{
  const userId = req.id
  let  user
  try{
     user = await User.findById(userId,"-password")
  }
  catch (err){
     return new Error(err)
  }
if(!user){
 return   res.status(404).json("User Not found")
}
return res.status(200).json({user})
}


exports.signup = signup
exports.login = login
exports.verifytoken = verifytoken
exports.getUser = getUser