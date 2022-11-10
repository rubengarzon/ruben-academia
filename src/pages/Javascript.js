import { useNavigate } from "react-router-dom";
import "../styles/javascript.css";

const Javascript = () => {
  const navigate = useNavigate();
  const sections = [
    {
      href: "/que-es-js",
      title: "¿Qué es Javascript?",
    },
    {
      href: "/hola-mundo",
      title: "Hola Mundo",
    },
  ];

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
      <h3>Básico</h3>
      <div className="cards-js">
        {sections.map((section) => (
          <a href={section.href} className="card" key={section.title}>
            <span className="card-title">{section.title}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Javascript;
