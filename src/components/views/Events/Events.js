import React from 'react';
import EventSection from '../../EventSection';
import {eventObjects} from './Data';

function Events() {
    return (
        <>
            {eventObjects.map((item) => (
                <EventSection {...item} /> 
            ))}
        </>
    )
}

export default Events
