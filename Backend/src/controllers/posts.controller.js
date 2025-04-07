import { getPostsModel, createPostModel, likePostModel, deletePostModel } from "../models/postsmodel.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await getPostsModel();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({ error: "Faltan datos" });
    }
    const img = url;
    const newPost = await createPostModel(titulo, img, descripcion);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el post" });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id) || parseInt(id) <= 0) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const updatedPost = await likePostModel(id);

    if (!updatedPost) {
      return res.status(404).json({ error: "Post no encontrado para dar like" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error al dar like:", error);
    res.status(500).json({ error: "Error al dar like" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    // Validación: ID debe ser un número entero positivo:
    if (isNaN(id) || parseInt(id) <= 0) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const deletedPost = await deletePostModel(id);

    // Si no se encontró el post, retornar 404.
    if (!deletedPost) {
      return res.status(404).json({ error: "Post no encontrado" });
    }
    res.status(200).json({ message: "Post eliminado correctamente", deletedPost });
  } catch (error) {
    console.error("Error al eliminar el post:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
