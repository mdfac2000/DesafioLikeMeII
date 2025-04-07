import express from "express";
import cors from "cors";
import postRoutes from "./src/routes/posts.routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use("/posts", postRoutes);

// Middleware para rutas no encontradas (404):
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no válida" });
});

// Middleware de manejo de errores generales (500):
app.use((err, req, res, next) => {
  console.error("Error interno:", err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => console.log(`🔥 Server On http://localhost:${PORT}`));
