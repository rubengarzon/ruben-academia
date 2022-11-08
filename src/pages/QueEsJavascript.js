import "../styles/queEsJavascript.css";
const QueEsJavascript = () => {
  return (
    <>
      <div className="link">
        <a href="/js">Volver</a>
      </div>
      <div className="block-que-es-js">
        <h1>¿Qué es Javascript?</h1>
        <div className="block-que-es-js__content">
          <p>
            Javascript es un lenguaje de programación que se ejecuta en el
            navegador web. Por tanto se utiliza como complemento de HTML y CSS
            para crear páginas web dinámicas.
          </p>
          <p>
            Cualquier página web que veas que tenga animaciones, interactividad,
            etc. es gracias a Javascript.
          </p>
          <p>
            No conviene confundir Javascript con Java, aunque su nombre lo
            sugiera. Javascript es un lenguaje de programación creado por
            Brendan Eich en 1995, mientras que Java es un lenguaje de
            programación creado por James Gosling en 1995.
          </p>
        </div>
      </div>
    </>
  );
};

export default QueEsJavascript;
