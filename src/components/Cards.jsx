import "../styles/cards.css";
const Cards = () => {
  return (
    <>
      <h2 className="subtitle">Aprende cualquier lenguaje a tu ritmo</h2>
      <div className="languages">
        <a href="/js" className="languages__js">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="Javascript"
            className="img__js"
          />
        </a>
        <a href="/" className="languages__angular">
          <img
            src="https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png"
            alt="Angular"
            className="img__angular"
          />
        </a>
        <a href="/" className="languages__react">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="React"
            className="img"
          />
        </a>
      </div>
    </>
  );
};

export default Cards;
