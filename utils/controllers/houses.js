import db from '../../utils/db';
import House from '../../utils/models/house';
import User from '../models/users';


export async function getAllHouse(req, res) {
  await db.connect();
  try {
    const fetched = await House.find();
    res.status(201).json({ success: true, data: fetched })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false, message: 'something wrong' })
  }
}

export async function getHouse(req, res) {
  await db.connect();
  try {
    console.log('processing');
    const fetched = await House.findById(req.query.houseId);
    console.log('fetched success');
    if (!fetched) { res.status(201).json({ success: false, message: 'not found any home' }) }
    res.status(201).json({ success: true, data: fetched })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false, message: err })
  }
}


export async function createHouse(req, res) {
  const data = req.body;
  await db.connect();
  console.log("1st", data.user);
  // if (!data.user, !data.title, !data.description, !data.price, !data.capacity, !data.facilities, !data.amenities, !data.imgs, !data.country, !data.city) {
  //   return res.status(200).json({ success: false, message: 'please enter all fields' })
  // }
  try {
    const user = await User.findOne({_id:data.user});
    console.log(user);
    if (!user) { return res.status(404).json({ success: false, message: 'no user found' }) }

    const created = await House.create({
      user: user,
      title: data.title,
      description: data.description,
      address: data.address,
      price: data.price,
      capacity: data.capacity,
      country: data.country,
      city: data.city,
      facilities: data.facilities,
      amenities: data.amenities,
      imgs: data.imgs
    })
    console.log(created);

    res.status(201).json({ success: true, data: created })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false, message: 'something wrong' })
  }
}