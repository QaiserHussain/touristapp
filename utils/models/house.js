import mongoose from 'mongoose';

const houseSchema = mongoose.Schema({
    user: { type: String, required:true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    address:{type: String, required: true},
    country:{type: String, required: true},
    city:{type: String, required: true},
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
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