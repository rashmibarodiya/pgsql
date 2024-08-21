
import getClient from "./utils";

export async function getData() {
    const client = await getClient()
    const getusers = `SELECT * FROM users`
    const users = await client.query(getusers);

    console.log("users : ");
    for (var user of users.rows) {
        console.log(`ID : ${user.id} , Email : ${user.email}`);
    }
}

export async function getTodos() {
    const client = await getClient()
    const getTodoss = `SELECT * FROM todos`
    const todos = await client.query(getTodoss);

    console.log("todos : ");
    for (var todo of todos.rows) {
        console.log(`ID : ${todo.id} , title : ${todo.title}, user : ${todo.user_id} , done : ${todo.done}`);
    }
}


export async function userFromEmail(email :string) {
    const client = await getClient()
    const q = `SELECT * FROM users WHERE email = $1`
    
    const res = await client.query(q, [email]);

    console.log("single user details : ");
    for (var user of res.rows) {
        console.log(`ID : ${user.id} , email : ${user.email}`);
    }
}


export async function getTodosForUser(userId :string) {
    const client = await getClient()
    const q = `SELECT * FROM todos WHERE user_id = $1`
    
    const res = await client.query(q, [userId]);

    console.log(`all todos for ${userId} : `);
    for (let todo of res.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
    }
}



getData()
getTodos()
userFromEmail("me@gmail.com")
getTodosForUser("3")