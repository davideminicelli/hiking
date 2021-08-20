// IMPORT STYLES

// IMPORT DATA
import { introCopy, mainHeroCopy, blogHeroCopy } from '../Data/copy';
import { shopMenu } from '../Data/menuData';

// IMPORT COMPONENTS
import React from 'react';
import Hero from './Hero';
import Text from './Text';
import ImagesMenu from './ImagesMenu';


const Homepage = ()=> {
    
    return (
        <section>
            <Hero title={mainHeroCopy.heading} mainHero="on" background="">
            <a className="hero-button" href="/shop">{mainHeroCopy.buttonCopy}</a>
                  </Hero>
                  <Text headingType="h2" data={introCopy} />
                  <ImagesMenu items={shopMenu.items} />
                  <Hero title={blogHeroCopy.heading}>
            <p>{blogHeroCopy.subtitle}</p>
            <a href="/">{blogHeroCopy.buttonCopy}</a>
                  </Hero>
        </section>
    )
};

export default Homepage;