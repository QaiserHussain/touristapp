import data from '../../utils/seed';
import db from '../../utils/db';
import User from '../../utils/models/users';
import bcrypt from 'bcrypt'

export async function getUser(req,res){
    const data = req.body;
  await db.connect();
  const userExist = await User.findOne({ email: data.email })
  if (userExist) {
    return res.status(200).json({ success: false, message: 'Email already exist' })
  }
  try {
    const hash = await bcrypt.hash(data.password, 10);
    const created = await User.create({
      username: data.username,
      email: data.email,
      password: hash
    })
    res.status(201).json({ success: true, data: created })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false })
  }
}