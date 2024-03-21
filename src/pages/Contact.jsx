import { Row, Col } from "antd";

function Contact() {
  return (
    <div
      style={{
        height: "80dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row gutter={8}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "right",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              marginBottom: "0em",
              fontWeight: 700,
              fontSize: 45,
              color: "#267195",
            }}
          >
            Contact us
          </p>
          <p
            style={{
              marginTop: "0em",
              fontWeight: 800,
              fontSize: 131,
              color: "#267195",
            }}
          >
            24/7
          </p>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "5em", marginLeft: "3em" }}>
            <p
              style={{
                fontSize: 19,
                fontWeight: 900,
                color: "white",
                marginBottom: "0em",
              }}
            >
              navigatingadolescence@gmail.com
            </p>
            <p
              style={{
                fontSize: 19,
                fontWeight: 900,
                color: "white",
                marginTop: "0.5em",
              }}
            >
              Phone Contact: +254 7 20 671 881
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#267195",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "250px",
              marginTop: "8em",
              borderRadius: "5px",
              fontFamily: "inherit",
              bottom: "50px",
              right: "50px",
              position: "fixed",
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

      <div
        style={{
          backgroundColor: "#859599",
          height: "100%",
          width: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "fixed",
          zIndex: -1,
        }}
      ></div>
    </div>
  );
}

export default Contact;
