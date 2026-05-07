import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class AboutMe extends React.Component {
    downloadCV() {
        const cvFile = "/abdallah-adel-cv.pdf"; 
        const link = document.createElement("a");
        link.href = cvFile;
        link.download = "abdallah-adel-cv.pdf";
        link.click();
    }
    render() {
        const sectionStyle = {
            padding: "80px 0",
            backgroundColor: "#fff"
        };

        const titleStyle = {
            fontSize: "3.5rem",
            fontWeight: "500",
            color: "#333",
            fontFamily: "serif"
        };

        const textStyle = {
            color: "#666",
            lineHeight: "1.8",
            fontSize: "1.1rem",
            marginBottom: "30px"
        };

        const btnStyle = {
            backgroundColor: "#333",
            border: "none",
            borderRadius: "0",
            padding: "12px 30px",
            fontSize: "1.1rem",
            color: "#fff"
        };

return (
    <section style={sectionStyle} className="about-me">
        <Container>
            <Row className="align-items-start">
                <Col md={4}>
                    <h1 style={titleStyle}>About me</h1>
                </Col>
                <Col md={8}>
                    <p style={textStyle}>
                        I'm Abdallah Adel, a web developer and designer. I create websites and web applications that are both functional and visually appealing. I'm passionate about web development and always looking to learn new things.
                        smsdkskfjslkdasl;jdfjkfnasdjdfklndsdsdklvndskldkajfkldfsklandklklsdkldsnlkdsdl;samfkldsndl;asmdkldsnf;ladkl;dsf;asdasd
                        ssdlasdlkaskldsdklmaslmdsklfmasl;dsl;l;ds
                    </p>
                <Button onClick={this.downloadCV} style={btnStyle} className="mt-2"> Download My CV </Button>
            </Col>
            </Row>
        </Container>
    </section>
        );
    }
}

export default AboutMe;