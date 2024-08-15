
import { Client } from "pg";

export default async function getClient() {
    const cl = new Client(process.env.uri!)
    console.log(process.env.uri!)
    await cl.connect()
    return cl;
}