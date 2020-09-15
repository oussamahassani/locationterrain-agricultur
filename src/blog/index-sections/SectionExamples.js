
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="https://www.gerbeaud.com/jardin/jardinage_naturel/potager-bio-creation.php" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assest/img/examples/98292-3765.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                target="_blank"
              >
                Potager BIO
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="https://www.lovethegarden.com/fr-fr/article/mon-premier-potager" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../assest/img/examples/163204417.jpg")}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                Cree votre 1er Potager              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
