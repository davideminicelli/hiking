// IMPORT STYLES

// IMPORT DATA
import { introCopy } from '../Data/copy';
import { shopMenu } from '../Data/menuData';

// IMPORT COMPONENTS
import React from 'react';
import Hero from './Hero';
import Text from './Text';
import ImagesMenu from './ImagesMenu';


const Homepage = ()=> {
    
    
    return (
        <section>
            <Hero title="Gear up. Start exploring.">
            <a className="hero-button" href="/shop">Shop Now</a>
                  </Hero>
                  <Text headingType="h2" data={introCopy} />
                  <ImagesMenu items={shopMenu.items} />
                  <Hero title="Muddy Diaries">
            <p className="hero-subtitle">A Blog about Nature, and lives well lived</p>
            <a className="hero-button" href="/">visit Blog</a>
                  </Hero>
        </section>
    )
};

export default Homepage;