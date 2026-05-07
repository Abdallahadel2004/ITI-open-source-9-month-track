import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class skills extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        skills: [
            { name: "HTML", percentage: 90 },
            { name: "CSS", percentage: 80 },
            { name: "JavaScript", percentage: 70 },
            { name: "React", percentage: 60 },
            { name: "Node.js", percentage: 50 }
        ]
    };
}
render() {
    const h1style = {
        color: "#fff",
        textAlign: "center",

    }
    const progressBarStyle = {
        backgroundColor: "#eee",
        color: "#333",
        height: "35px",
        margin: "0 0 15px 0",
        width: "100%",
        display: "flex",
        alignItems: "center"
    }
    return (
        <section style={{ backgroundColor: "#333", padding: "50px", color: "#fff" }}>
            <Container>
                <h1 className="h1" style={h1style}>Skills</h1>
                <p style={{ color: "#fff", textAlign: "center", marginBottom: "40px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem doloremque voluptatem tenetur necessitatibus nihil, tempore aperiam vel porro labore saepe modi quaerat! Error quaerat odit quidem porro tempore ullam!jnfjknfjkeewklropjgewobkojrigrojifjoirjeopjfoierjoejjwe
                    ejrwejjweoijwiojrioejiowejriowejfjkekfktwekoprkgopewkpoerkewopkeropkeopkerokfopewpoeriowejioerowkoieroepwerjkfrojfkrjfiorjfiorrfjerojfoire
                    trejeriorjoprjtoerjoperpekopekprotjerorkojrpojeopfopkfopekpgkeropkorpkopkopfkoprkfoperkfopferkopfkreopfkerokrefeor
                </p>

                <Row>
                    <Col md={5}>
                        <h3 style={{ borderBottom: "1px solid #fff", paddingBottom: "10px", display: "inline-block", marginBottom: "20px" }}>MY FOCUS</h3>
                        <div style={{ marginBottom: "10px", fontSize: "1.2rem" }}>UI/UX Design</div>
                        <div style={{ marginBottom: "10px", fontSize: "1.2rem" }}>Responsive Design</div>
                        <div style={{ marginBottom: "10px", fontSize: "1.2rem" }}>Web Design</div>
                        <div style={{ marginBottom: "10px", fontSize: "1.2rem" }}>Mobile App Design</div>
                    </Col>
                    <Col md={7}>
                        {this.state.skills.map((skill, index) => (
                            <div key={index} style={progressBarStyle}>
                                <div style={{ backgroundColor: "#959188", width: "120px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                                    {skill.name}
                                </div>
                                <div style={{ flex: 1, backgroundColor: "#eee", height: "100%" }}>
                                    <div style={{ width: `${skill.percentage}%`, height: "100%", backgroundColor: "#aaa" }}></div>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
}
export default skills;
