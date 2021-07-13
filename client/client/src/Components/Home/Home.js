import React, { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../SocketContext';
import './Home.css';
import msteams from '../../assets/msteams.png';
import ChatIcon from '@material-ui/icons/Chat';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import DuoIcon from '@material-ui/icons/Duo';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import {signout} from './signout';
import Googlelogin from '../Googlesignpage/Googlelogin';


import firebase from '../../common/firebase-config';


import 'firebase/auth';
// import Navbar from '../Navbar/Navbar';

const Home = (props) => {
  const paramsCode = props.location.search;

  const { meetingCode, setMeetingCode, setNewMeet } = useContext(SocketContext);
 
  useEffect(() => {
    if (paramsCode.length) {
      if (paramsCode.substring(0, 5) == '?ref=') return; // for product hunt ref
      setMeetingCode(paramsCode.substring(1));
    }
    setNewMeet(null);
  }, []);

  return (
    <div className='home'>
      {/* <Navbar /> */}
      <div className='body-div'>
      
        
        <img src={msteams}/>
        {/* <div className='flex-box'> */}
        {/* <img width='10 src='https://www.avepoint.com/blog/wp-content/uploads/2016/12/Microsoft-Teams_Webinar-1-700x300.jpg'/> */}
          <div className='left-div'>
            {/* <div className='contents'> */}
              <div className='start-meet'>
                <Link
                  className='home-btn'
                  to='join'
                  onClick={() => {
                    setNewMeet(true);
                  }}
                >
                  Start Meeting
                </Link>
              </div>
              <div className='join-meet'>
                <input
                  type='text'
                  placeholder='Enter meeting code'
                  value={meetingCode || ''}
                  onChange={(e) => {
                    setMeetingCode(e.target.value);
                  }}
                />
                <button
                  className='home-btn'
                  onClick={() => {
                    if (!meetingCode || meetingCode.trim().length === 0) {
                      message.error('Please enter the meeting code');
                      return;
                    }
                    props.history.push('join');
                  }}
                >
                  Join Meeting
                </button>
                
              </div>
              <div className='sign'>
              <Link to='/'>
                <ExitToAppIcon
                 onClick={
                  signout()}/></Link>
                 
                  </div>
                  <span className='signtext'>SIGNOUT</span>
              <div className='features'>
                <h1>Features</h1>
                <div className='grid-div'>
                  <DuoIcon />
                  <p>VIDEO CALL</p>
                </div>
                <div className='grid-div'>
                  <SurroundSoundIcon />
                  <p>WHITEBOARD</p>
                </div>
                <div className='grid-div'>
                  <EventNoteIcon />
                  <p>Notes</p>
                </div>
                <div className='grid-div'>
                  <ChatIcon />
                  <p>Real time Chat</p>
                </div>
               
              </div>
           
        </div>
      </div>
     
    </div>
  );
};

export default Home;
