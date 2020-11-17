import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './ProgramSection.css';

function ProgramSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, speaker, date, time, location, buttonLabel, img, alt, imgStart
}) {
    return (<>
          <div className={lightBg ? 'home__program-section' : 'home__program-section darkBg'}>
              <div className="container">
                  <div className="row home__program-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__program-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className = {lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className = {lightTextDesc ? 'home__program-subtitle' : 'home__program-subtitle dark'}>{description}</p>
                            <p className = {lightTextDesc ? 'home__program-speaker' : 'home__program-speaker dark'}>{speaker}</p>
                            <p className = {lightTextDesc ? 'home__program-date' : 'home__program-date dark'}>{date}       {time}</p>
                            <p className = {lightTextDesc ? 'home__program-location' : 'home__program-location dark'}>{location}</p>
                            <Link to="/components/views/Program/Program.jsx">
                                <Button buttonSize='btn--wide' buttonColour='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__program-img-wrapper">
                            <img src={img} alt={alt} className="home__program-img"/>
                        </div>
                    </div>
                  </div>
              </div>
          </div>  
    </>)
}

export default ProgramSection;
