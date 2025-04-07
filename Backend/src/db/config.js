import pg from "pg";
import "dotenv/config"; // Cargar variables de entorno...

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  allowExitOnIdle: true,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Error conectando a la BD:", err);
  } else {
    console.log("🔋 BD conectada", res.rows[0]);
  }
});

export default pool;