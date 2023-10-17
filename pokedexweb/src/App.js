import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Container } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const divStyle = {
    border: "2px solid black",
    padding: "20px", // Añade algo de relleno para mayor claridad
};

function App() {
    return (
        <Container style={{ height: "100vh" }}>
            <Row style={{ height: "100%" }}>
                <Col className="border" xs={3}>
                    Barra de configuracion
                </Col>

                <Col className="border" xs={9}>
                    <Row className="border" style={{ height: "50%" }}>
                        Pokemon descripcion
                    </Row>
                    <Row className="border" style={{ height: "50%" }}>
                        <Col className="border"> Stats1</Col>
                        <Col className="border">Stats2</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
