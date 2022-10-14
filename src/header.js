import React from "react";
import { Container } from "react-bootstrap";

function Header() {
    return(
        <header>
            <Container className="d-flex justify-content-center align-items-center">
                <p>calc</p>

                <div>
                    <p>Theme</p>
                </div>
            </Container>
        </header>
    );
}


export default Header;