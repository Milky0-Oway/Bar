import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"Такой пользователь не существует"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Неверный логин/пароль"});
        }
        const token = createToken(user._id);
        res.json({success:true,token});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:"Ошибка"});
    }
};

const createToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
    const {name, password, email, phone} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"Такой пользователь уже существует"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Почта введена неверно"});
        }
        if(password.length < 8){
            return res.json({success:false,message:"Введите более сильный пароль"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword,
            phone: phone
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});
    }
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Ошибка"});
    }
}

export {loginUser,registerUser};