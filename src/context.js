import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children })=>{
    const [result,setResult] = useState("");

    const calculate = ()=> {
        try {
            setResult(eval(result || "") + "");
        }
        catch (e) {
            setResult("error");
        }
    }

    const reset = ()=> {
        setResult("");
    }

    const del = ()=> {
        setResult(result.slice(0,-1));
    }

    const handleClick=(button)=> {
        if (button === "=") {
            calculate();
        }
        else if (button === "reset") {
            reset();
        }
        else if (button === "del") {
            del();
        }
        else {
            setResult(result + button);
        }
    }

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
        <AppContext.Provider value={{
            result, handleClick
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = ()=> {
    return useContext(AppContext);
}