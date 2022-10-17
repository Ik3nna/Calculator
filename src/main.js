import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Screen from "./screen";
import ButtonContainer from "./buttonContainer";

function Main() {

    useEffect(()=>{
      const main = document.querySelector(".main");
      const buttons = document.querySelectorAll(".button");
      const arr = [...buttons];

      if (main.classList.contains("theme1")) {
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
      }

      arr.forEach((element, index) => {
        element.addEventListener("click", () => {
        element.style.opacity = "1";

        if (index == 0) {
          document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
          main.classList.add("theme1");
          main.classList.remove("theme2","theme3");
        }
        else if (index == 1) {
          document.body.style.backgroundColor = "hsl(0, 0%, 90%)"
          main.classList.add("theme2");
          main.classList.remove("theme1","theme3");
        }
        else {
          document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
          main.classList.add("theme3");
          main.classList.remove("theme1","theme2");
        }

        arr.filter(function (item) {
          return item != element;
        }).forEach((item) => {
          item.style.opacity = "0";
        });
        });
      });
    },[]);

    return(
        <main className="theme1 main">
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

          <Screen />

          <ButtonContainer />
            
        </main>
    );
}

export default Main;