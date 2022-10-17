import React, { useState, useContext } from "react";

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