
// import getClient from "./utils";

// export async function createTable() {
//     console.log("i am here")
//     const userTableQuery = `
//     create TABLE user (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL
//     )`

//     const client = await getClient()

//     await client.query(userTableQuery)

// const createtodoTableQuery =`
// create TABLE todos (
// id SERIAL PRIMARY KEY,
// title VARCHAR(255) NOT NULL,
// description VARCHAR(255) NOT NULL,
// user_id INTEGER REFERENCES user(id)
// done BOOLEAN DEFAULT FALSE)
// `

// await client.query(createtodoTableQuery)


// console.log("table created successfully")
// }

// createTable()