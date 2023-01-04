import data from '../../utils/seed';
import db from '../../utils/db';
import User from '../../models/user';



const handler = async(req,res)=>{
  const data = req.body;
  await db.connect();
    // await User.insertMany(data.users);
  try{
    await User.create(data)
    res.status(201).json({ success: true, data: data })
    await db.disconnect();
  }catch(err){
    res.status(400).json({ success: false})
  }
}

export default handler;