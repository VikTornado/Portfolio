import React from "react";
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Slider from "./Components/Slider"
import {BrowserRouter} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <SideNav/>
            <Main/>
            <Work data={props.data}/>
            <Projects state={props.state}/>
            <Slider/>
            <Contact/>
        </BrowserRouter>
    );
}

export default App;