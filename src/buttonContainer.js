import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useGlobalContext } from "./context";

function ButtonContainer () {

    const {handleClick} = useGlobalContext();

    return(
        <section className="wrapper mt-3 p-3">
            <Container>
                <Row>
                    <Col xs = {{ span: 3 }}><Button name="7" onClick={(e)=>handleClick(e.target.name)}>7</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="8" onClick={(e)=>handleClick(e.target.name)}>8</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="9" onClick={(e)=>handleClick(e.target.name)}>9</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button name="del" onClick={(e)=>handleClick(e.target.name)}>Del</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button name="4" onClick={(e)=>handleClick(e.target.name)}>4</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="5" onClick={(e)=>handleClick(e.target.name)}>5</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="6" onClick={(e)=>handleClick(e.target.name)}>6</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button name="+" onClick={(e)=>handleClick(e.target.name)}>+</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 3 }}><Button name="1" onClick={(e)=>handleClick(e.target.name)}>1</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="2" onClick={(e)=>handleClick(e.target.name)}>2</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="3" onClick={(e)=>handleClick(e.target.name)}>3</Button></Col>   

                    <Col xs = {{ span: 3 }}><Button name="-" onClick={(e)=>handleClick(e.target.name)}>-</Button></Col>
                </Row>
 
                <Row>
                    <Col xs = {{ span: 3 }}><Button name="." onClick={(e)=>handleClick(e.target.name)}>.</Button></Col>

                    <Col xs = {{ span: 3 }}><Button name="0" onClick={(e)=>handleClick(e.target.name)}>0</Button></Col>
                    
                    <Col xs = {{ span: 3 }}><Button name="/" onClick={(e)=>handleClick(e.target.name)}>/</Button></Col>   
 
                    <Col xs = {{ span: 3 }}><Button name="*" onClick={(e)=>handleClick(e.target.name)}>*</Button></Col>
                </Row>

                <Row>
                    <Col xs = {{ span: 6 }}><Button name="reset" className="reset" onClick={(e)=>handleClick(e.target.name)}>Reset</Button></Col>

                    <Col xs = {{ span: 6 }}><Button name="=" className="equal" onClick={(e)=>handleClick(e.target.name)}>=</Button></Col>
                </Row>
            </Container>
        </section>
    );
}

export default ButtonContainer;