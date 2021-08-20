import React from 'react';

const Hero = ({title, children, mainHero="off", background})=> {

    // STYLE based on mainHero

    const styles = {
        on: {
                h1Style: "text-4xl",
                sectionStyle: "h-96 bg-gray-600 text-gray-50 text-center flex flex-col justify-between items-center py-28",
         },
        off: {
                h1Style: "text-4xl",
                sectionStyle: "h-96 bg-gray-200 text-gray-50 text-center flex flex-col justify-between items-center py-28",
            }
        };

    return (
        <section style={{backgroundImage: `url(${background})`}} className={styles[mainHero].sectionStyle}>
            <h1 className={styles[mainHero].h1Style}>{title}</h1>
            {children}
        </section>
    )
}

export default Hero;