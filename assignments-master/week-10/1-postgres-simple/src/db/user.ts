import { number } from "zod";
import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *;";
    const values = [username,password,name];
    
    const insertResult = await client.query(insertQuery, values);
    return insertResult.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const getQuery = "SELECT * FROM users WHERE id = $1;"
    const selectResult = await client.query(getQuery,[userId]);
      return selectResult.rows[0];
}
