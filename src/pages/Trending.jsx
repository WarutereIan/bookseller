import { Row, Col, Grid } from "antd";

function Trending() {
  const { useBreakpoint } = Grid;

  const { md, sm, xs, lg } = useBreakpoint();

  console.log("md", md, "sm", sm, "xs", xs, "lg", lg);

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Row gutter={8} justify={"center"}>
        <Col span={8}>
          <Row>
            <Col span={12}>
              <p
                style={{
                  fontSize: 60,
                  margin: "0em",
                  //marginRight: "-3em",
                  fontWeight: 700,
                  color: "#267195",
                }}
              >
                2024
              </p>
              <p
                style={{
                  fontSize: 22,
                  margin: "0em",
                  //marginRight: "-8em",
                  fontWeight: 500,
                  color: "#267195",
                }}
              >
                Understanding
              </p>
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              {" "}
              <img
                src="./blackGuyReading.png"
                style={{ width: "80%", marginRight: "-1em" }}
              ></img>
            </Col>
          </Row>

          <p
            style={{
              textAlign: "right",
              fontWeight: 500,
              fontSize: 25,
              marginBottom: "0em",
              color: "#267195",
            }}
          >
            Online{" "}
          </p>
          <p
            style={{
              textAlign: "right",
              fontSize: 45,
              fontWeight: 700,
              marginTop: "0em",
              marginBottom: "0em",
              color: "#267195",
            }}
          >
            Addiction
          </p>
          <p style={{ fontWeight: 300, fontSize: 19, textAlign: "right" }}>
            Dive into the essence of adolescence with our compelling book!
            Explore the complex web of teenage relationships, self discovery and
            societal pressures. From nurturing healthy self concepts to
            navigating peer and romantic connections, our book offers invaluable
            insights for both teens and parents.
          </p>
        </Col>
        <Col span={4}>
          <img
            src="./youngMan.png"
            style={{ width: "95%", height: "80%" }}
          ></img>
        </Col>
        <Col span={4}>
          <p style={{ fontWeight: 300, fontSize: 14, textAlign: "left" }}>
            {" "}
            Dive into the essence of adolescence with our compelling book!
            Explore the complex web of teenage relationships, self discovery and
            societal pressures. From nurturing healthy self concepts to
            navigating peer and romantic connections, our book offers invaluable
            insights for both teens and parents.
          </p>
        </Col>
        <Col span={4}>
          <img
            src="./2girls.png"
            style={{ width: "100%", height: "50%" }}
          ></img>
        </Col>
        <Col span={4}>
          <p
            style={{
              color: "#267195",
              fontWeight: "500",
              fontSize: 25,
              marginBottom: "0em",
            }}
          >
            Understanding{" "}
          </p>
          <p
            style={{
              color: "#267195",
              fontWeight: "700",
              fontSize: 45,
              marginTop: "0em",
              marginBottom: "0em",
            }}
          >
            Peers
          </p>
          <p style={{ fontWeight: 300, fontSize: 14, textAlign: "left" }}>
            Dive into the essence of adolescence with our compelling book!
            Explore the complex web of teenage relationships, self discovery and
            societal pressures. From nurturing healthy self concepts to
            navigating peer and romantic connections, our book offers invaluable
            insights for both teens and parents.
          </p>
          <div
            style={{
              backgroundColor: "#267195",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "120%",
              marginTop: "8em",
              borderRadius: "5px",
              fontFamily: "inherit",
            }}
          >
            <p
              style={{
                fontSize: 45,
                fontWeight: "bold",
                color: "white",
                marginTop: "1em",
                marginBottom: "0em",
              }}
            >
              WEEKLY
            </p>
            <p
              style={{
                fontSize: 25,
                fontWeight: 500,
                marginTop: "0em",
                color: "white",
                paddingLeft: "50px",
              }}
            >
              Newsletter
            </p>

            <input
              defaultValue="email"
              type="email"
              style={{
                backgroundColor: "",
                boxShadow: "none",
                border: 0,
                borderRadius: "1px",
                fontFamily: "Inter",
                marginBottom: "1em",
                textAlign: "center",
                font: "inherit",
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Trending;
