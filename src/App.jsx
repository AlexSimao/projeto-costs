import { Link } from "react-router-dom";
import Container from "./components/layout/Container/Container";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
      </nav>
      <Container custonClass="min-height" />
      <h1>Goodbye</h1>
    </>
  );
}

export default App;
