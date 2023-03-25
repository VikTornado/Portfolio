import React from "react";
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App(props) {
    return (
        <div className={''}>
            <SideNav/>
            <Main/>
            <Work data={props.data}/>
            <Projects state={props.state} />
            <Contact/>
        </div>
    );
}

export default App;