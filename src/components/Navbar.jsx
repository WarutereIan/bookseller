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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/trending">Trending</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/get-book">Get Book</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
