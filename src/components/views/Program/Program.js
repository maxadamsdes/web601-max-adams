import React from 'react';
import ProgramSection from '../../ProgramSection';
import Pricing from '../../Pricing';
import {programObjOne} from './Data';
import {programObjTwo} from './Data';
import {programObjThree} from './Data';
import {programObjFour} from './Data';
import {programObjFive} from './Data';
import {programObjSix} from './Data';
import {programObjSeven} from './Data';

function Program() {
    return (
        <>
            <Pricing />
           <ProgramSection {...programObjOne} /> 
           <ProgramSection {...programObjTwo} />
           <ProgramSection {...programObjThree} />
           <ProgramSection {...programObjFour} />
           <ProgramSection {...programObjFive} />
           <ProgramSection {...programObjSix} />
           <ProgramSection {...programObjSeven} />
        </>
    )
}

export default Program
