import getClient from "./utils";

export async function del(id :number) {
    const client = await getClient()

    const q = `DELETE FROM todos WHERE id = $1`
    await client.query(q, [id])
    console.log(`todo with id ${id} deleted successfully!!`)
}

del(1)