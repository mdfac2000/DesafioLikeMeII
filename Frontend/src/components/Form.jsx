import { useState } from "react";

function Form({ setTitulo, setImgSRC, setDescripcion, agregarPost }) {
  const [titulo, setTituloState] = useState("");
  const [imgSRC, setImgSRCState] = useState("");
  const [descripcion, setDescripcionState] = useState("");

  const isFormValid = titulo.trim() && imgSRC.trim() && descripcion.trim();

  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input
          onChange={(event) => {
            setTitulo(event.target.value);
            setTituloState(event.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input
          onChange={(event) => {
            setImgSRC(event.target.value);
            setImgSRCState(event.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          onChange={(event) => {
            setDescripcion(event.target.value);
            setDescripcionState(event.target.value);
          }}
          className="form-control"
        ></textarea>
      </div>

      {/* Mensaje solo si faltan datos, esto para validar en front */}
      {!isFormValid && (
        <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
          ⚠️ Debe llenar todos los campos antes de agregar
        </p>
      )}

      <div className="d-flex">
        <button
          onClick={agregarPost}
          className="btn btn-light m-auto"
          disabled={!isFormValid}
          title={!isFormValid ? "Debe llenar todos los campos" : ""}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Form;
