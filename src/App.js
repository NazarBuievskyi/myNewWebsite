import React from "react";
//Import Global style
//Import Pages
import {AboutUs} from "./pages/AboutUs";
import {GlobalStyle} from "./components/GlobalStyle";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <AboutUs/>
        </div>
    );
}

export default App;
