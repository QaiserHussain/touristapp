import mongoose from 'mongoose';

const houseSchema = mongoose.Schema({
    user: { type: Object },
    title: { type: String, required: true },
    description: { type: String, required: true },
    address:{type: String, required: true},
    country:{type: String, required: true},
    city:{type: String, required: true},
    price: { type: String, required: true },
    capacity: { type: String, required: true },
    facilities: [{ type: String, required: true }],
    amenities: [{ type: String, required: true }],
    imgs: [{ type: String, required: true }],
    rating: { type: mongoose.Schema.Types.ObjectId, ref: 'Review'},
    reserved: {
        from: { type: String, default: '' },
        to: { type: String, default: '' }
    }
}
,
{
    timestamps:true
}
);



const House = mongoose.models.House || mongoose.model('House', houseSchema);
export default House;