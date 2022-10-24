import React from "react";
//Import Global style
//Import Pages
import {AboutUs} from "./pages/AboutUs";
import {GlobalStyle} from "./components/GlobalStyle";
import {Nav} from "./components/Nav";
import {ContactUs} from "./pages/ContactUs";
import {OurWork} from "./pages/OurWork";
import {Route, Routes, useLocation} from 'react-router-dom';
import {MovieDetails} from "./pages/MovieDetails";
//animation
import {AnimatePresence} from "framer-motion";

function App() {
    const location = useLocation()
    return (
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <AnimatePresence exitBeforeEnter onExitComplete={() => window.scroll(0, 0)}>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<AboutUs/>}/>
                    <Route path='/work' element={<OurWork/>}/>
                    <Route exact path='/work/:id' element={<MovieDetails/>}/>
                    <Route path='/contact' element={<ContactUs/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
