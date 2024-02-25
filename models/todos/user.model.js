import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: String,
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
