//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



import { Client } from "pg";
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

export default async function getClient() {
    const cacertpath = path.resolve(__dirname, '../cert/ca.pem');
    const cacert = fs.readFileSync(cacertpath).toString();

    const cl = new Client({
        connectionString: process.env.uri,
        ssl: {
            ca: cacert,
            rejectUnauthorized: true, 
        }
    });

    try {
        await cl.connect();
        console.log("Connected successfully");
        return cl;
    } catch (error: any) {
        console.error("Connection error:", error);
        throw error;  // Throwing the error to stop further execution if connection fails
    }
}

getClient();
