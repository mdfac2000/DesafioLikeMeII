import pool from "../db/config.js";

export const getPostsModel = async () => {
  const { rows } = await pool.query("SELECT * FROM posts ORDER BY id DESC");
  return rows;
};

export const createPostModel = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
  const { rows } = await pool.query(consulta, [titulo, img, descripcion]);
  return rows[0];
};

export const likePostModel = async (id) => {
  const consulta = "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(consulta, [id]);
  return rows[0];
};

export const deletePostModel = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1 RETURNING *";
  const { rows } = await pool.query(consulta, [id]);
  return rows[0];
};
