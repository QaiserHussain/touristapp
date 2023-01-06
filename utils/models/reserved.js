import mongoose from 'mongoose';

const reservedSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    house: { type: mongoose.Schema.Types.ObjectId, ref: 'houses' },
    start: { type: String },
    end: { type: String }
}
,
{
    timestamps:true
})


const Reserved = mongoose.models.Reserved || mongoose.model('Reserved', reservedSchema);

export default Reserved;