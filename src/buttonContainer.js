import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ButtonContainer () {

    return(
        <section className="wrapper mt-3 p-3">
            <Container>
                <Row>
                    <Col xs = {{ span: 3 }}><Button name="7">7</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="8">8</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="9">9</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button name="Del">Del</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button name="4">4</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="5">5</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="6">6</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button name="+">+</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button name="1">1</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="2">2</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="3">3</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button name="-">-</Button></Col>
                </Row>
 
                <Row>
                    <Col xs = {{ span: 3 }}><Button name=".">.</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="0">0</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="/">/</Button></Col>   
 
                    <Col xs = {{ span: 3 }}><Button name="*">*</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 6 }}><Button name="reset" className="reset">Reset</Button></Col>

                    <Col xs = {{ span: 6 }}><Button name="=" className="equal">=</Button></Col>
                </Row>
            </Container>
        </section>
    );
}

export default ButtonContainer;