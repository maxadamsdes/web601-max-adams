import React from 'react';
import Pricing from '../../Pricing';
import ProgramSection from '../../ProgramSection';
import {loginObjOne} from './Data';
import {loginObjTwo} from './Data';

function Login() {
    return (
        <>
           <ProgramSection {...loginObjOne} /> 
           <ProgramSection {...loginObjTwo} />
           <Pricing />
        </>
    )
}

export default Login
