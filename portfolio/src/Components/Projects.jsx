import React from 'react';
import ProjectBlock from "./ProjectBlock";


const Projects = (props) => {
    return (
        <div id={"projects"} className={'max-w-[1040px] m-auto md:pl-20 p-4 py-16'}>
            <h1 className={'text-4xl font-bold text-center text-[#001b5e]'}>Projects</h1>
            <p className={'text-center py-8'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, aliquam amet, commodi dicta
                harum id itaque neque nesciunt numquam perspiciatis quaerat rem reprehenderit repudiandae rerum
                sequi sint velit veritatis.
            </p>
            <ProjectBlock state={props.state}/>
        </div>
    );
};

export default Projects;