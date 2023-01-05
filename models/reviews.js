import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    house: { type: mongoose.Schema.Types.ObjectId, ref: 'houses' },
    comment:{type:String},
    rating:{type:Number}
}
,
{
    timestamps:true
})

const Reviews = mongoose.models.Review || mongoose.model('Review',reviewSchema);

export default Reviews;