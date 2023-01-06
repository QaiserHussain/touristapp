import mongoose from 'mongoose';

const packagesSchema = mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    facilities: [{ type: String, required: true }],
    amenities: [{ type: String, required: true }],
    imgs: [{ type: String, required: true }],
    rating: { type: Number, default: 0 },
    reserved: {
        from: { type: String, default: '' },
        to: { type: String, default: '' }
    }
}
,
{
    timestamps:true
})
const Packages = mongoose.models.Package || mongoose.model('Package',packagesSchema);

export default Packages;