import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        position: "relative",
        marginTop: "0",
        padding: 0,
        height: "80px",
        zIndex: "999",
        width: "80%",
        //marginLeft: "20em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80px",
          //marginLeft: "-20em",
          width: "50%",
          position: "absolute",
          marginTop: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/get-book">Get Book</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
