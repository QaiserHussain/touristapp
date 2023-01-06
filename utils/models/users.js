import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    img:{type:String, default:''},
    role:{type:String, default:'client'}
},
{timestamps:true}
);

const User= mongoose.models.User || mongoose.model('User',userSchema);
export default User;