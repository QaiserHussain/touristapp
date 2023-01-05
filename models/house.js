import mongoose from 'mongoose';

const houseSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    facilities: [{ type: String, required: true }],
    amenities: [{ type: String, required: true }],
    imgs: [{ type: String, required: true }],
    rating: { type: mongoose.Schema.Types.ObjectId, ref: 'reviews'},
    reserved: {
        from: { type: String, default: '' },
        to: { type: String, default: '' }
    }
}
,
{
    timestamps:true
});

const House = mongoose.models.House || mongoose.model('House', houseSchema);
export default House;