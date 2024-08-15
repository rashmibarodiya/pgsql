import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();


export default async function getClient() {
    const cl = new Client(process.env.uri!)
  //  console.log(process.env.uri!)
    await cl.connect()
    return cl;
 }

//console.log(process.env.uri!)