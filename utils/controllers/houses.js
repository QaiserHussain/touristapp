import db from '../../utils/db';
import House from '../../utils/models/house';
import User from '../models/users';


export async function getAllHouse(req, res) {
  await db.connect();
  try {
    const fetched = await House.find();
    if(!fetched){res.status(404).json({ success: false, message: 'No houses found' })}
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
  // console.log(data);
  await db.connect();
  if (!data.user, !data.title, !data.description, !data.price, !data.capacity, !data.facilities, !data.amenities, !data.images, !data.country, !data.city) {
   res.status(200).json({ success: false, message: 'please enter all fields' })
  }
  try {
    const user = await User.findOne({_id:data.user});
    // console.log(user);
    if (!user) { return res.status(404).json({ success: false, message: 'please login first' }) }
console.log('in progress');
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
      images: data.images
    })
console.log('progress completed');
    
    console.log('created :', created);

    res.status(201).json({ success: true, message:'successfully created', data: created })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false, message: 'something wrong' })
  }
}