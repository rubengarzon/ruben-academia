import { useNavigate } from "react-router-dom";
import "../styles/javascript.css";

const Javascript = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="link">
        <a href="/" alt="">
          Inicio
        </a>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        width="100"
        alt="Javascript"
        className="img__js"
      />
      <h2>Javascript</h2>
      <div className="cards-js">
        <div className="card">
          <span
            className="card-title"
            onClick={() => {
              navigate("/que-es-js");
            }}
          >
            ¿Qué es Javascript?
          </span>
        </div>
        <div className="card">
          <span className="card-title">Hola Mundo</span>
        </div>
        <div className="card">
          <span className="card-title">La consola</span>
        </div>
        <div className="card">
          <span className="card-title">En desarrollo</span>
        </div>
        <div className="card">
          <span className="card-title">En desarrollo</span>
        </div>
        <div className="card">
          <span className="card-title">En desarrollo</span>
        </div>
        <div className="card">
          <span className="card-title">En desarrollo</span>
        </div>
        <div className="card">
          <span className="card-title">En desarrollo</span>
        </div>
        <div className="card">
          <span className="card-title">En desarrollo</span>
        </div>
      </div>
    </>
  );
};

export default Javascript;
