import React from "react";
import { Container } from "react-bootstrap";

function Header () {
    
    return(
        <header className="m-auto">
            <Container className="d-flex justify-content-center align-items-center mt-5">
              <p>calc</p>

              <div className="theme d-flex justify-content-center align-items-center">
                <p>Theme</p>
                        
                <div className="numbers">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>

                <div className="tri-state-toggle">
                  <input className="button" type="radio" name="toggle" id="one" />
                  <input className="button" type="radio" name="toggle" id="two" />
                  <input className="button" type="radio" name="toggle" id="three" />
                </div>
              </div>
            </Container>
        </header>
    );
}

export default Header;