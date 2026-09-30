import dotenv from "dotenv";
import path from "node:path";

dotenv.config({path: path.resolve("./.env.dev")});

export const PORT = Number(process.env.PORT) || 3000;
export const ATLAS_URI = process.env.ATLAS_URI;
export const ENCRYPYION_KEY = process.env.ENCRYPYION_KEY;
export const SALT_ROUND = Number(process.env.SALT_ROUND);