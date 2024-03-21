import { Row, Col } from "antd";

function Home() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Row gutter={8}>
        <Col span={12}>
          <p style={{ color: "#859599", fontSize: 50, fontWeight: 700 }}>
            {" "}
            Welcome
          </p>
          <p style={{ textAlign: "right", fontSize: 19, fontWeight: 300 }}>
            Dive into the essence of adolescence with our compelling book!
            Explore the complex web of teenage relationships, self discovery and
            societal pressures. From nurturing healthy self concepts to
            navigating peer and romantic connections, our book offers invaluable
            insights for both teens and parents.
          </p>
          <p style={{ textAlign: "right", fontSize: 19, fontWeight: 300 }}>
            Join us on a journey of growth, understanding and navigating the
            turbulent journey of adolescence.
          </p>

          <Row>
            <Col span={24}>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  //justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <p
                  style={{ textAlign: "right", fontSize: 15, fontWeight: 300 }}
                >
                  Check out My
                </p>
                <p
                  style={{
                    paddingLeft: "10px",
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#D86231",
                  }}
                >
                  Latest Book
                </p>
                <img
                  style={{
                    height: "300px",
                    width: "300px",
                    paddingLeft: "150px",
                  }}
                  src="./writer.svg"
                ></img>
              </span>
            </Col>
          </Row>
          <button
            style={{
              //display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              marginTop: "-2em",

              width: "60%",
              height: "20%",
              backgroundColor: "#859599",
            }}
          >
            <p
              style={{
                fontSize: 66,
                fontWeight: "700",

                marginBottom: "0.2em",
                marginTop: "0em",
              }}
            >
              12,350
            </p>
            <p
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginBottom: "-1em",
                marginTop: "-1em",
              }}
            >
              Teen Pregnancies
            </p>
            <p style={{ fontSize: 18, fontWeight: "300" }}>Recorded Annually</p>
          </button>
        </Col>
        <Col
          span={12}
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 50, fontWeight: 300 }}>Shop our</p>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "-6em",
            }}
          >
            <p style={{ fontSize: 50, fontWeight: 300, marginBottom: "0em" }}>
              Book
            </p>
            <p
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: "#A73938",
              }}
            >
              Online
            </p>
          </span>
          <img style={{ height: 400, width: 290 }} src="./book_cover.svg"></img>
          <button
            style={{
              backgroundColor: "#1E1E1E",
              height: "16%",
              width: "42%",
              marginTop: "6.1em",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Buy Now
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
