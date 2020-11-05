import React from 'react';
import Pricing from '../../Pricing';
import ProgramSection from '../../ProgramSection';
import {aboutObjOne} from './Data';
import {aboutObjTwo} from './Data';

function About() {
    return (
        <>
           <ProgramSection {...aboutObjOne} /> 
           <Pricing />
           <ProgramSection {...aboutObjTwo} />
        </>
    )
}

export default About
