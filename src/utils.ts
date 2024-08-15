import { Client } from "pg";
import dotenv from 'dotenv';
import path from 'path'
import fs from 'fs'

dotenv.config();


export default async function getClient() {
    const cacertpath = path.resolve(__dirname,'../cert/ca.pem')
    const cacert = fs.readFileSync(cacertpath).toString()

    const cl = new Client({
        connectionString : process.env.uri,
        ssl:{
            ca : cacert,
            rejectUnauthorized :true
        }
    })
  //  console.log(process.env.uri!)
    await cl.connect()
    return cl;
 }

//console.log(process.env.uri!)