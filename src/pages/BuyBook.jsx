import { Row, Col } from "antd";

function BuyBook() {
  return (
    <div style={{ height: "80vh" }}>
      <Row>
        <Col
          span={14}
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="./book_cover.svg"
            style={{ marginTop: "2em", marginBottom: "4em" }}
          ></img>
          <button style={{ width: "80%" }}>Buy Now</button>
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src="./book_cover.svg" width={100} style={{}}></img>
        </Col>
      </Row>
    </div>
  );
}

export default BuyBook;
