import userModel from "../models/userModels.js"

export const register =  async(req,res)=>{

    const {name, role, email,password, confirm}  = req.body
    try {
        if(!name || !role || !email || !password || !confirm)
        {
            return res.status(404).send({massage:"these fields are a must fied"})
        }

        if(password !== confirm)
        {
            return res.send({message:"the password must march"})
        }

        const user = await userModel.findOne({email: userModel.email})

        if(!user)
        {
           return res.send({message:"user is created"})
        }
        else
        {
            return res.send({message:"the user oready is there"})
        }
    } catch (error) {
        res.send({message:"system is currenty being worked on"})
    }
}

export const login = (req, res) =>{
    res.send({message:"login working"})
}

// when user is to login or creating an account aftet the emal is validated then they send an otp to email