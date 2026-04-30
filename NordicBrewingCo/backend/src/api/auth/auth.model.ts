import { Schema, model } from "mongoose";
import { IUser } from "./auth.types";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        passwordHash: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            required: true,
            enum: ['buyer', 'admin'],
            default: 'buyer'
        },
    },
    {
        timestamps:true,
    },
);

export const UserModel = model<IUser>('User', userSchema);