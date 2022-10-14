import React from "react";
import { Container } from "react-bootstrap";

function Screen () {

    return(
        <Container className="d-flex justify-content-center align-items-center">
            <input type="text" readOnly />
        </Container>
    );
}

export default Screen;