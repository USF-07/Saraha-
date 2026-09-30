import mongoose from "mongoose";
import { ATLAS_URI, PORT } from "../config/config.js";

export async function dbConnection(app) {
    try {
        await mongoose.connect(ATLAS_URI);
        await mongoose.syncIndexes();
        console.log("DB connect successfully");
        app.listen(PORT,() => {
            console.log("Server is running successfully");
        })
    } catch (error) {
        console.log("DB connection failed",{error});
    }
}