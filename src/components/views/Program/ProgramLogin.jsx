import React, { useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { login, adminCheck } from '../../utils';
import {Link} from 'react-route-dom';
import {Button} from '../../Button'

import Pricing from '../../Pricing';
//import ProgramSection from '../../ProgramSection';
import { programObjects } from './Data';
import '../../ProgramSection.css';

function loginReducer(draft, action) {
  switch (action.type) {
    case 'field': {
      draft[action.fieldName] = action.payload;
      return;
    }
    case 'login': {
      draft.error = '';
      draft.isLoading = true;
      return;
    }
    case 'success': {
      draft.isLoggedIn = true;
      draft.isLoading = false;
      //draft.email = '';
      draft.password = '';
      return;
    }
    case 'error': {
      draft.error = 'Incorrect email or password!';
      draft.isLoggedIn = false;
      draft.isLoading = false;
      draft.email = '';
      draft.password = '';
      return;
    }
    case 'logOut': {
      draft.isLoggedIn = false;
      return;
    }
    case 'admin': {
      draft.error = '';
      draft.isLoading = true;
      return 
    }
    case 'adminPass': {
      draft.isLoading = false;
      draft.admin = 1;
      return 
    }
    default:
      return;
  }
}


const initialState = {
  email: '',
  password: '',
  firstName: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

const initialAdminState = {
  email: '',
  admin: false,
}

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export default function LoginUseContext() {
  const [state, dispatch] = useImmerReducer(loginReducer, initialState);
  const { email, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await login({ email, password }); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };


  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className='App useContext'>
          <div className='login-container'>
            {isLoggedIn ? (
              <>

                <h1>Welcome {email}!</h1>
                <button onClick={() => dispatch({ type: 'logOut' })}>
                  Log Out
                </button>
                <programLoader />
                <Pricing />
                {programObjects.map((item) => (
                    <ProgramSection key={item.title} {...item} /> 
                ))}
                {/* <TodoPage todos={todos} /> */}

              </>
            ) : (
              <form className='form' onSubmit={onSubmit}> {/* HERE THE onSubmit is set up !!*/ }
                {error && <p className='error'>{error}</p>}
                <p>Please Login!</p>
                <input
                  type='text'
                  placeholder='email'
                  value={email}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'email',
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <input
                  type='password'
                  placeholder='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={(e) =>
                    dispatch({
                      type: 'field',
                      fieldName: 'password',
                      payload: e.currentTarget.value,
                    })
                  }
                />
                <button className='submit' type='submit' disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Log In'}
                </button>
              </form>
            )}
          </div>


        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}


async function ProgramSection({
  lightBg, topLine, lightText, lightTextDesc, headline, description, speaker, date, time, location, buttonLabel, img, alt, imgStart
}) {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const {email, admin} = state;
  //const isLoggedIn = true;

  dispatch({ type: 'admin' });

  try {
    await adminCheck({ email }); // <<< HERE WE CONNECT UP TO THE API CALL IN util.js
    dispatch({ type: 'success' });
  } catch (error) {
    dispatch({ type: 'error' });
  }


  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
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

            <div className={admin ? "container" : "hide"}>
              <div className="row home__proggram-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                <div className="col">
                  <div className="home__program-img-wrapper">
                          <img src={img} alt={alt} className="home__program-img"/>
                      </div>
                  </div>
                </div>
            </div>

        </div>  
        </StateContext.Provider>
    </DispatchContext.Provider>)
}


