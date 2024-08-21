import getClient from "./utils";


export async function update(pass :string,id : string) {
     const client = await getClient()

     const updtuserpassq = `UPDATE users SET password  = $1
     WHERE id  = $2`;
    const res =  await client.query(updtuserpassq,[pass, id])
console.log("updated successfully")

}
export async function updt(id : string) {
    const client = await getClient()

    const q = `UPDATE todos SET done  = $1
    WHERE id  = $2`;
   const res =  await client.query(q,[true, id])
console.log("updated successfully")

}


updt("1")