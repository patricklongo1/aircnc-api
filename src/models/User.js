import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        email: String,
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);
