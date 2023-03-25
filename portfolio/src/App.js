import React from "react";
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Work from "./Components/Work";
import Projects from "./Components/Projects";

function App(props) {
    return (
        <div className={''}>
            <SideNav/>
            <Main/>
            <Work data={props.data}/>
            <Projects state={props.state} />
        </div>
    );
}

export default App;