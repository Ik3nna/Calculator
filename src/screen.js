import React from "react";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "./context";

function Screen () {
    const {result} = useGlobalContext();

    return(
        <Container className="d-flex justify-content-center align-items-center">
            <div className="result">
                <p>{result}</p>
            </div>
        </Container>
    );
}

export default Screen;