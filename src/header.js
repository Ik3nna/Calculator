import React from "react";
import { Container } from "react-bootstrap";

function Header() {
    return(
        <header className="m-auto">
            <Container className="d-flex justify-content-center align-items-center mt-5">
                <p>calc</p>

                <div className="theme">
                    <p>Theme</p>
                </div>
            </Container>
        </header>
    );
}


export default Header;