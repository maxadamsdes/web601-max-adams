import React from 'react';
import Pricing from '../../Pricing';
import ProgramSection from '../../ProgramSection';
import {homeObjOne} from './Data';
import {homeObjTwo} from './Data';

function Home() {
    return (
        <>
           <ProgramSection {...homeObjOne} /> 
           <ProgramSection {...homeObjTwo} />
           <Pricing />
        </>
    )
}

export default Home
