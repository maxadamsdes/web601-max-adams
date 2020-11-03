import React from 'react';
import Pricing from '../../Pricing';
import ProgramSection from '../../ProgramSection';
import {eventsObjOne} from './Data';
import {eventsObjTwo} from './Data';

function Events() {
    return (
        <>
           <ProgramSection {...eventsObjOne} /> 
           <ProgramSection {...eventsObjTwo} />
           <Pricing />
        </>
    )
}

export default Events
