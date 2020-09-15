
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Oui, mais …</h2>
              <p className="description">
              À quoi sert-il de posséder un jardin potager ? J’ai un marché primeur près de chez moi avec des agriculteurs locaux qui font ça très bien et qui ont d’excellents produits de saison et à des prix raisonnables
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
