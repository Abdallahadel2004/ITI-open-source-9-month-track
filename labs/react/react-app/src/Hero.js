import React from "react";
import { Container, Button } from "react-bootstrap";

class Hero extends React.Component {
    render() {
        const bg_image = "https://wallpaperaccess.com/full/8512875.jpg";

        const heroStyle = {
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            color: "white"
        };

 return (
     <div id="hero" style={heroStyle}>
        <Container>
            <div className="ps-md-5">
            <h1 className="display-2 fw-bold mb-2">Abdallah Adel</h1>
            <p className="h3 mb-4 fw-light">Web Developer & Designer</p>
            <Button
                variant="outline-light"
                size="lg"
                style={{ borderRadius: "0", borderWidth: "2px", letterSpacing: "2px", textTransform: "uppercase" }}
                onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                Contact Me
            </Button>
            </div>
        </Container>
    </div>
    );
    }
}

export default Hero;