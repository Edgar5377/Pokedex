import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectionBar from "./components/SelectionBar";
import BaseStats from "./components/BaseStats";
import PokemonDescription from "./components/PokemonDescription";
import TypeDefense from "./components/TypeDefense";
import './index.css'

function App() {
  return (
    <>
    <Container style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col className="border" xs={3}>
          <SelectionBar />
        </Col>

        <Col className="border" xs={9}>
          <Row className="border" style={{ height: "50%"}}>
            <div className="horizontal-pokemon-description">
              <PokemonDescription />
            </div>
          </Row>
          <Row className="border" style={{ height: "50%" }}>
            <Col className="border">
              <BaseStats />
            </Col>
            <Col className="border">
              <TypeDefense />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
    
  );
}

export default App;
