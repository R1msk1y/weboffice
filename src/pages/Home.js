import Header from "../components/header/Header";
import Projects from "./Projects";

const Home = () => {
  return (
    <main className="section">
      <div className="container">
        <Header />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
