import Cards from "../components/Cards";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <div className="links">
        <a href="https://github.com/rubengarzon" className="git">
          Github
        </a>
        <a href="https://www.linkedin.com/in/ruben-dev" className="linkedin">
          LinkedIn
        </a>
      </div>
      <h1>Rubén Academia</h1>
      <Cards></Cards>
    </div>
  );
};

export default Home;
