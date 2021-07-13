import { getDisplayStream } from './media-access';
import React from 'react'
import { ShareScreenIcon } from './ShareScreenIcon';

export default class Screenshare {

  
    getDisplay() {
        getDisplayStream().then(stream => {
          stream.oninactive = () => {
            this.state.peer.removeStream(this.state.localStream);
            this.getUserMedia().then(() => {
              this.state.peer.addStream(this.state.localStream);
            });
          };
          this.setState({ streamUrl: stream, localStream: stream });
          this.localVideo.srcObject = stream;
          this.state.peer.addStream(stream);
        });
      }
render(){
    return (
        <>
           <div className='controls'>
        <button
          className='control-btn'
          onClick={() => {
            this.getDisplay();
          }}
        >
          <ShareScreenIcon />
        </button>  
        </div>
        </>
    )
}
}
