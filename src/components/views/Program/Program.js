import React from 'react';
import ProgramSection from '../../ProgramSection';
import Pricing from '../../Pricing';
import {programObjects} from './Data';
// import {programObjTwo} from './Data';
// import {programObjThree} from './Data';
// import {programObjFour} from './Data';
// import {programObjFive} from './Data';
// import {programObjSix} from './Data';
// import {programObjSeven} from './Data';

function Program() {
    return (
        <>
            <Pricing />
            {programObjects.map((item) => (
                <ProgramSection {...item} /> 
            ))}
        </>
    )
}

export default Program
