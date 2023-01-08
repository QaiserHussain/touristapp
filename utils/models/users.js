import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: '' },
    role: { type: String, default: 'user' }
},
    {
        // toJSON: { virtuals: true },
        // toObject: { virtuals: true },
        timestamps: true
    }
);

// userSchema.virtual('usersDetail',{
//     ref:'House',
//     foreignField:'userId',
//     localField:'_id'
// });

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;