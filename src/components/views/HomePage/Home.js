import React from 'react';
import Pricing from '../../Pricing';
import ProgramSection from '../../ProgramSection';
import EventSection from '../../EventSection';
import FeaturedItems from '../../FeaturedItems';
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';
import {homeObjThree} from './Data';
import { featuredItems } from '../../Data/Featured';

function Home() {
    return (
        <>
           <FeaturedItems />
            {featuredItems.map((item) => (
                <FeaturedItems {...item} /> 
            ))}
            <EventSection {...homeObjThree}/>
           <ProgramSection {...homeObjOne} /> 
           <ProgramSection {...homeObjTwo} />
           <Pricing />
        </>
    )
}

export default Home
