import "../styles/holaMundo.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const HolaMundo = () => {
  const codeString = `<html lang="en">
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hola Mundo</h1>
  </body>
</html> `;
  return (
    <>
      <div className="link">
        <a href="/js">Volver</a>
      </div>
      <div>
        <h1>Hola Mundo</h1>
      </div>
      <div className="block">
        <p className="content">
          Creamos un archivo html y dentro de él escribimos la etiqueta{" "}
          <strong>script</strong>, la etiqueta script tiene un atributo llamado{" "}
          <strong>src</strong> que es donde le indicamos la ruta del archivo
          javascript que queremos ejecutar.
        </p>
        <div className="code">
          <SyntaxHighlighter language="html" style={dracula}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        <p className="content">
          Utilizamos el método <strong>alert</strong> que muestra un mensaje en
          una ventana emergente.
        </p>
        <div className="code">
          <SyntaxHighlighter language="javascript" style={dracula}>
            {`alert("Hola Mundo");`}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="block">
        <p className="content">El resultado sería este:</p>
        <img
          src="https://i.ibb.co/vsmpD2Q/holamundo.png"
          alt="Hola Mundo"
          width="600px"
          className="holamundo__img"
        />
      </div>
    </>
  );
};

export default HolaMundo;
