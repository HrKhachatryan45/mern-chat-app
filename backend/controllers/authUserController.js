const User = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})

       const isMatch = await bcrypt.compare(password,user?.password || '')
        if (!isMatch || !user) {
            return res.status(400).json({error:'Invalid username or password'})
        }


        const token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn: '15d'})


        res.cookie('jwt',token,{
            maxAge:15 * 24 * 60 * 60 * 1000,
            httpOnly:true,
            sameSite: 'strict',
            secure:process.env.NODE_ENV !== 'development',
        })

        console.log(token,'token')

        return res.status(200).json(user)


    }catch (error) {
        console.error('following error in here',error)
        return res.status(500).json({error: 'Something went wrong',error3:error});
    }
}
const signupUser = async (req, res) => {
  try {
      const {fullName,username,password,confirmPassword,gender} = req.body;

      if (password !== confirmPassword) {
          return res.status(400).json({error: 'Passwords do not match'});
      }

      const user1 = await User.findOne({username})

      if (user1){
          return res.status(400).json({error: 'Username already exists'});
      }


      const boyProfilePic =  `https://avatar.iran.liara.run/public/boy?username=${username}`
      const girlProfilePic =  `https://avatar.iran.liara.run/public/girl?username=${username}`

      const hashedPassword = await bcrypt.hash(password,10)

      const user = new User({
          fullName,
          username,
          password:hashedPassword,
          gender,
          profilePic:gender==='male' ? boyProfilePic : girlProfilePic
      })


      if (user){

          const  token = jwt.sign({user},process.env.JWT_SECRET,{expiresIn:'15d'})

          res.cookie('jwt',token,{
              maxAge:15 * 24 * 60 * 60 * 1000,
              httpOnly:true,
              sameSite: 'strict',
              secure:process.env.NODE_ENV !== 'development',
          })
          console.log(token,'token')

          await user.save()
          return res.status(200).json(user)

      }else {
          return res.status(400).json({error:'Invalid userData'})
      }



  }catch (error) {
      console.error('following error in here',error)
      return res.status(500).json({error: 'Something went wrong',error3:error});
  }

}

const logoutUser = async (req, res) => {
    try {
        res.cookie('jwt','',{maxAge:0})
     return res.status(200).json({message:'User logged out'})
    }catch (error) {
        console.error('following error in here',error)
        return res.status(500).json({error: 'Something went wrong',error3:error});
    }
}


module.exports = {
    loginUser,
    signupUser,
    logoutUser
}