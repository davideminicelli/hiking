import React from 'react';

const Hero = (props)=> {


    return (
        <section>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    )
}

export default Hero;