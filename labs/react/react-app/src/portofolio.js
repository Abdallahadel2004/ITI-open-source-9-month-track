import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class Portofolio extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        portofolio: [
            { name: "web design" },
            { name: "app design" },
            { name: "web development" },
            { name: "app development" },
            { name: " ui/ux design" },
            { name: "Logo design" }
            ]
    };
}
render() {
    return (
    <Container className="my-5">
        <h1 className="ms-5 mt-5 mb-4">Portofolio</h1>
        <Row className="px-5">
            {this.state.portofolio.map((project, index) => (
                <Col key={index} md={4} className="mb-4">
                    <Card 
                        style={{ 
                            backgroundColor: index % 2 === 0 ? "#777" : "#333", 
                            color: "white",
                            height: "200px",
                            border: "none",
                            borderRadius: "0"
                        }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <Card.Title className="text-uppercase" style={{ letterSpacing: "2px" }}>{project.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
        );
    }
}
export default Portofolio;