import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './EventSection.css';

function EventSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, date, time, location, buttonLabel, img, alt, imgStart
}) {
    return (<>
          <div className={lightBg ? 'event-section' : 'event-section darkBg'}>
              <div className="container">
                  <div className="row event-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="event-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className = {lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className = {lightTextDesc ? 'event-subtitle' : 'event-subtitle dark'}>{description}</p>
                            <p className = {lightTextDesc ? 'event-date' : 'event-date dark'}>{date}       {time}</p>
                            <p className = {lightTextDesc ? 'event-location' : 'event-location dark'}>{location}</p>
                            <Link to="/components/views/Events/Events.js">
                                <Button buttonSize='btn--wide' buttonColour='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="event-img-wrapper">
                            <img src={img} alt={alt} className="event-img"/>
                        </div>
                    </div>
                  </div>
              </div>
          </div>  
    </>)
}

export default EventSection;
