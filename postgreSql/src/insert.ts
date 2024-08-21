

import getClient from "./utils"

export async function insertTodo(){

     const client = await getClient()
    const userText = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
    const userVal = [`test@gmail.com`, "my password"];
    let resposnse = await client.query(userText,userVal)

    const todoText = `INSERT INTO todos (title, description, user_id, done)
    values ($1, $2, $3, $4) RETURNING id`;

    const todoVal = ["test", "des ",3, false ];
    await client.query(todoText, todoVal);
    console.log("entries created successfully!!")
}
insertTodo()