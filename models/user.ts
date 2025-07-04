import { kMaxLength } from "buffer";
import mongoose from "mongoose";
import uniquevalidater from "mongoose-unique-validator";

const userSchhema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true, 
        minlength: 3, 
        MaxLength:20,
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        minlength: 5,

    },
    password: {
        type: String,
        
    },
    role: {
        type: String,  
        default: "user",
    },    
    image: {
        type: String,
    },
    resetCode: {
        data: String,
        expiresAt: {
            type: Date,
            default: Date.now,
            index: { expires: "1h" }, // Automatically remove after 1 hour
        }
    }
}, {
    collection: "users",
    timestamps: true,
});

userSchhema.plugin(uniquevalidater);

export default mongoose.models.User || mongoose.model("User", userSchhema);