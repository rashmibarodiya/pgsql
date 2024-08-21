import getClient from "../utils";

export async function getTodoAndUserWithJoins(userId:string) {
    const client = await getClient()

    const jq =  `SELECT users.*, todos.title, todos.description,todos.done
    FROM users
    LEFT JOIN todos ON users.id =  todos.user_id
    WHERE users.id = $1`;

    const res = await client.query(jq,[userId])
    const results = res.rows;

    console.log("User and Todos:", results);
}

export async function get2(userId:string) {
    ("######################################################################")
    const client = await getClient()

    const jq =  `SELECT users.*, todos.title, todos.description,todos.done
    FROM users
    JOIN todos ON users.id =  todos.user_id
    WHERE users.id = $1`;

    const res = await client.query(jq,[userId])
    const results = res.rows;

    console.log("User and Todos:", results);
}


export async function get3() {
    console.log("######################################################################33")
    const client = await getClient()

    const jq =  `SELECT todos.*, users.email, users.password
    FROM todos
    JOIN users ON todos.user_id =  users.id
    WHERE todos.id = $1
  `;

    const res = await client.query(jq, ["2"])
    const results = res.rows;

    console.log("User and Todos:", results);
}

// getTodoAndUserWithJoins("3")
// get2("3")
get3()