import React, { useEffect } from 'react'
import firebase from '../../common/firebase-config';
import Home from '../Home/Home';
import {Link} from 'react-router-dom';
import 'firebase/auth';
import { Route } from 'react-router';
// import './Google.css';
import './Google.scss';
import { useHistory } from 'react-router';

 const Googlelogin=(props)=> {
     const history = useHistory();
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                console.log('user logged in',user);
               
                history.push('home');
               
            }else{
                console.log('error occured while logging in');
            }
        })
    
    },[]);
    function signOut() {
        // [START auth_sign_out]
        firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        // [END auth_sign_out]
      }
    const OAuth=()=>{
    //     firebase.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //             console.log('user logged in');
    //         }else{
    //             console.log('error occured while logging in');
    //         }
    //     })
    const provider= new firebase.auth.GoogleAuthProvider(); 
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'it';

   firebase.auth().signInWithPopup(provider);
  
//     firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });


    }

    return (
        <>
        
        <div class="container" onclick="onclick">
  <div class="top"></div>
  <div class="bottom"></div>
  <div class="center">
    <h2>Please Sign In</h2>
    <input type="Email" placeholder="Enter Email"/>
    <input type="Password" placeholder="Enter Password"/>

    <h2>&nbsp;</h2>
  
    
        <button onClick={OAuth} className='siginbtn'>Login with gmail</button>
  </div>
</div>
    
        </>
    )
}
export default Googlelogin;