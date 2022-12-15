import { pool } from "../db/index.js";

export async function getRandomRiddle() {
    const sqlQuery = 'SELECT * FROM riddles ORDER BY RANDOM() LIMIT 1';
    const result = await pool.query(sqlQuery);
    const riddle = result.rows;

    return riddle;
}


// export async function getRandomRiddle() {
//     const sqlQuery = 'SELECT id from riddles';
//     const result = await pool.query(sqlQuery);
//     const riddle = result.rows;

//     return riddle;
// }