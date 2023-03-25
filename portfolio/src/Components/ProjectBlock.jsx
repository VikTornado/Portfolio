import React from 'react';

const ProjectBlock = (props) => {
    return (
        <div className={'grid sm:grid-cols-2 gap-12'}>
            {props.state.map((item, id) => {
                return(
                    <div className={"relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-300 to-[#001b5e]"}>
                        <img className={'rounded-xl group-hover:opacity-10'} key={id} src={item.image} alt=""/>
                        <div className={'hidden group-hover:block absolute top-[50%] left-[50%] translate-y-[-50%]'}>
                            <h3 className={'text-2xl font-bold text-white tracking-wider text-center'}>{item.title}</h3>
                            <p className={'pb-4 pt-2 text-center text-white'}>React JS</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProjectBlock;