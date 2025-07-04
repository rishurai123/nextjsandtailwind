import mongoose from "mongoose";
 
const dbConnect = async () => {
    if(mongoose.connection.readyState > 1) {
        return;
    }
    const dbUri = process.env.DB_URI;
    if (!dbUri) {
        throw new Error("DB_URI environment variable is not defined");
    }
    mongoose.connect(dbUri);
};

export default dbConnect;