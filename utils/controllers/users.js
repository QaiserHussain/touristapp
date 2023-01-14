import db from '../db';
import User from '../models/users';
import bcrypt, { compare } from 'bcrypt'

export const createUser = async (req, res) => {
  const data = req.body;
  await db.connect();
  const userExist = await User.findOne({ email: data.email })
  console.log(userExist);
  if (userExist) {
    return res.status(200).json({ success: false, message: 'Email already exist' })
  }
  console.log(req.body);

  try {
    const hash = await bcrypt.hash(data.password, 10);
    const created = await User.create({
      image: data.image,
      username: data.username,
      email: data.email,
      password: hash,
      // role: data.role
    })
    console.log(created);
    res.status(201).json({ success: true, data: created })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false })
  }
}
export const loginUser = async (req, res) => {
  const data = req.body;

  try {
    await db.connect();
    const userExist = await User.findOne({ email: data.email })
    if (!userExist) {
      return res.status(404).json({ success: false, message: 'wrong email or password' })
    }
    const checkPassword = await compare(data.password, userExist.password);
    if (!checkPassword) {
      return res.status(404).json({ success: false, message: 'Wrong email or password' })
    }
    res.status(200).json({ success: true, message: 'Successfully Login', data: userExist })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false })
  }
}


export const getUsers = async (req, res) => {
  try {
    await db.connect();
    const users = await User.find();
    if (!users) { res.status(404).json({ status: false, message: 'no users found' }) }
    res.status(200).json({ status: true, message: data })
  } catch (err) {
    res.status(404).json({ status: fasle, message: err })
  }
}

export const getUser = async (req, res) => {
  try {
    await db.connect();
    const user = await User.findById(req.query.id);
    if (!user) { res.status(404).json({ status: false, message: 'no user found' }) }
    res.status(200).json({ status: true, message: 'user found', data: user })
  } catch (err) {
    res.status(404).json({ status: false, message: 'something went wrong' })
  }

}


export const updateUser = async (req, res) => {
  try {
    await db.connect();
    const user = await User.findById(req.query.id)
    if (!user) { res.status(404).json({ status: false, message: 'no user found' }) }
    const checkPassword = await compare(req.body.oldPassword, user.password);
    if (!checkPassword) {
      return res.status(404).json({ success: false, message: 'wrong password' })
    }
    const hash = await bcrypt.hash(req.body.newPassword, 10)
    const userUpdated = await User.findByIdAndUpdate(req.query.id, {
      image: req.body.image,
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    if (!userUpdated) { res.status(404).json({ status: false, message: 'error found while user updating' }) }
    res.status(200).json({ status: true, message: 'user updated', data: userUpdated })
    await db.disconnect();

  } catch (err) {
    res.status(404).json({ status: false, message: 'something went wrong' })
  }

}