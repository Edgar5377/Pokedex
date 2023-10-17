import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Container } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// ----------- Componentes -----------
import SelectionBar from "./components/SelectionBar";
import BaseStats from "./components/BaseStats";
import PokemonDescription from "./components/PokemonDescription";
import PokedexSearchBar from "./components/PokedexSearchBar";
import TypeDefense from "./components/TypeDefense";
// -----------------------------------

function App() {
    return (
        <Container style={{ height: "100vh" }}>
            <Row style={{ height: "100%" }}>
                <Col className="border" xs={3}>
                    <SelectionBar />
                </Col>

                <Col className="border" xs={9}>
                    <Row className="border" style={{ height: "50%" }}>
                        <PokemonDescription />
                    </Row>
                    <Row className="border" style={{ height: "50%" }}>
                        <Col className="border">
                            {" "}
                            <BaseStats />{" "}
                        </Col>
                        <Col className="border">
                            <TypeDefense />{" "}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
