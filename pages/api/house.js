import db from '../../utils/db';
import House from '../../utils/models/house';



const handler = async (req, res) => {
  const data = req.body;
  const { user, name, description, price, capacity, facilities, amenities, imgs, rating, reserved } = data;
  await db.connect();
  if (!(user, name, description, price, capacity, facilities, amenities, imgs)) {
    return res.status(400).json({ success: false, message: 'please fill all fields' })
  }
  try {
    const created = await House.create({
      user: user,
      name: name,
      description: description,
      price: price,
      capacity: capacity,
      facilities: facilities,
      amenities: amenities,
      imgs: imgs,
    })
    res.status(201).json({ success: true, data: created })
    await db.disconnect();
  } catch (err) {
    res.status(400).json({ success: false, message: err })
  }
}

export default handler;