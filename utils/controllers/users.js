import db from '../db';
import User from '../models/users';
import bcrypt from 'bcrypt'

export const createUser = async(req, res) => {
  const data = req.body;
  await db.connect();
  const userExist = await User.findOne({ email: data.email })
  if (userExist) {
    return res.status(200).json({ success: false, message: 'Email already exist' })
  }
  try {
    const hash = await bcrypt.hash(data.password, 10);
    const created = await User.create({
      // img:data.image,
      username: data.username,
      email: data.email,
      password: hash,
      role: data.role
    })
    res.status(201).json({ success: true, data: created })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false })
  }
}


export const getUsers = async (req,res)=>{
  try{
    const users = await User.find();
    if(!users){res.status(404).json({status:false,message:'No users found'})}
    res.status(200).json({status:true,message:data})
  }catch(err){
    res.status(404).json({status:fasle,message:err})
  }
  
}