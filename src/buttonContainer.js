import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ButtonContainer () {

    return(
        <section className="wrapper mt-3 p-3">
            <Container>
                <Row>
                    <Col xs = {{ span: 3 }}><Button>7</Button></Col>

                    <Col xs = {{ span: 3 }}><Button>8</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button>9</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button>Del</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button>4</Button></Col>

                    <Col xs = {{ span: 3 }}><Button>5</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button>6</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button>+</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button>1</Button></Col>

                    <Col xs = {{ span: 3 }}><Button>2</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button>3</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button>-</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button>.</Button></Col>

                    <Col xs = {{ span: 3 }}><Button>0</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button>/</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button>x</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 6 }}><Button className="reset">Reset</Button></Col>

                    <Col xs = {{ span: 6 }}><Button  className="equal">=</Button></Col>
                </Row>
            </Container>
        </section>
    );
}

export default ButtonContainer;