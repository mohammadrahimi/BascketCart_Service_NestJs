
import * as dotenv from "dotenv";
dotenv.config();


export const APP_PORT = process.env.APP_PORT || 3003;
export const APP_HOST = process.env.APP_HOST || "0.0.0.0"