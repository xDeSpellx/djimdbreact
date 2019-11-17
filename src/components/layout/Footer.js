import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './layout.css';

class Footer extends React.Component {
    render() {
        return (
            <Jumbotron fluid style={{ backgroundColor: "#242729" }}>
                <Container>
                    <Row>
                        <Col>
                            <SocialIcon target="_blank" network="facebook" style={{ height: 25, width: 25 }} url="https://www.facebook.com/jogeorgoudakis" />
                        </Col>
                        <Col>
                            <SocialIcon target="_blank" network="linkedin" style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/igeorgoudakis/" />
                        </Col>
                        <Col>
                            <SocialIcon target="_blank" network="github" style={{ height: 25, width: 25 }} url="https://github.com/xMagiciaNx" />
                        </Col>
                        <Col>
                            <SocialIcon network="email" style={{ height: 25, width: 25 }} url="mailto:igeorgoudakis@yahoo.com" />
                        </Col>
                    </Row>
                    <hr style={{ backgroundColor: "aliceblue" }} />
                    <Row>
                        <Col><p style={{ color: "white" }}>@2019 John Georgoudakis</p></Col>
                        <Col><p style={{ color: "white" }}>Powered by Django, ReactJS, Bootstrap and tons of coffee</p></Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Footer;