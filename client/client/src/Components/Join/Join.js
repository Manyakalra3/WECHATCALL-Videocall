import React, { useContext, useEffect, useRef, useParams } from 'react';
import { SocketContext } from '../../SocketContext';
import './Join.css';
// import { BodyPixReactView } from 'body-pix-react-render';
// import 'body-pix-react-render/dist/index.css';
// import homeIcon from '../../assets/video-call.png';
import { message } from 'antd';
import Spinner from '../../common/Spinner';
// import {Bg} from '../bg';
// import Navbar from '../Navbar/Navbar';

const Join = (props) => {
  const {
    callAccepted,
    name,
   bodyPix, 
    setName,
    stream,
    setStream,
    callUser,
    otherUserName,
    meetingCode,
    setMeetingCode,
    newMeet,
  } = useContext(SocketContext);

  const myPreviewVideo = useRef();

  useEffect(() => {
    if (!newMeet && meetingCode.length === 0) {
      props.history.push('/');
      window.location.reload();
      return;
    }
    // if (stream) return;
    //blurvideoo
    
    // const canvas = document.getElementById('canvas');

    // async function loadAndBlur() {
    //   const net = await bodyPix.load();
    //   const segmentation = await net.segmentPerson(myPreviewVideo);

    //   const backgroundBlurAmount = 9;
    //   const edgeBlurAmount = 3;
    //   const flipHorizontal = false;

    //   bodyPix.drawBokehEffect(canvas, myPreviewVideo, segmentation, backgroundBlurAmount, edgeBlurAmount, flipHorizontal);
    // }
    // loadAndBlur();

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((res) => {
        res.getAudioTracks()[0].enabled = false;
        setStream(res);
        myPreviewVideo.current.srcObject = res;
      });
  }, []);

  useEffect(() => {
    if (callAccepted) props.history.push('meet');
  }, [callAccepted]);

  return (
    <>
      {/* <Navbar /> */}
      <div className='join-page'>
        <div>
          
          <div className='video-div'>
            {stream ? (
              //  <Bg></Bg>
              <>
              <h1 className='text'>Join now for Meeting</h1>
              <video
                width='250'
                height='140'
                src=''
                ref={myPreviewVideo}
                autoPlay
                muted
              ></video>
              </>
            ) : (
              <Spinner />
            )}
          </div>
          {stream && (
            <>
             
              <input
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              
              <div className='join-btns-div'>
                {newMeet ? (
                  <button
                    className='btn'
                    onClick={() => {
                      if (name.trim().length === 0) {
                        message.error('Please enter your name');
                        return;
                      }
                      props.history.push('meet');
                    }}
                  >
                   
                    Start
                  </button>
                ) : (
                  <button
                    className='btn'
                    onClick={() => {
                      if (name.trim().length === 0) {
                        message.error('Please enter your name');
                        return;
                      }

                      callUser(meetingCode);
                    }}
                  >
                    Join now
                  </button>
                )}
                <button
                  className='btn'
                  onClick={() => {
                    setMeetingCode('');
                    props.history.push('/');
                    window.location.reload();
                  }}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Join;
