import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Footer extends React.Component {
  contactMe = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
        <footer  style={{ backgroundColor: "#111", color: "white", padding: "60px 0" }}>
            <Container id="contact">
                <Row className="align-items-center">
                    <Col md={4} className="text-start">
                        <h5 className="mb-4" style={{ fontWeight: "bold", letterSpacing: "2px" }}>GET IN TOUCH</h5>
                        <div className="mb-2">
                            <i className="fas fa-envelope me-3"></i>
                            <span>abdallahadel20000p@gmail.com</span>
                        </div>
                        <div>
                            <i className="fas fa-phone-alt me-3"></i>
                            <span>10554455667</span>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <Button 
                            onClick={this.contactMe}
                            variant="outline-light" 
                            style={{ borderRadius: "0", padding: "10px 40px", fontSize: "1.1rem", borderWidth: "2px" }}
                        >
                            CONTACT ME
                        </Button>
                    </Col>
                    <Col md={4} className="text-end">
                        <div className="mb-3">
                            <a href="#" className="text-white me-4"><i className="fab fa-linkedin fa-2x"></i></a>
                            <a href="#" className="text-white me-4"><i className="fab fa-facebook-square fa-2x"></i></a>
                            <a href="#" className="text-white"><i className="fab fa-twitter-square fa-2x"></i></a>
                        </div>
                        <p className="mb-0" style={{ color: "#888" }}>
                            Copyright &copy; 2026
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
        );
    }
}
export default Footer;