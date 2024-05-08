import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertQuery = "INSERT INTO todos (user_id,title,description) VALUES ($1, $2, $3) RETURNING *;";
    const values = [userId,title,description];
    
    const insertResult = await client.query(insertQuery, values);
    return insertResult.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const getTodo = `UPDATE todos SET done = true WHERE id = $1 RETURNING id,title,description,done `;
    const id = [todoId];
    const result = await client.query(getTodo, id);
    return result.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const getQuery ="SELECT * FROM todos WHERE user_id = $1"
    const response = await client.query(getQuery,[userId]);
    return response.rows;
}