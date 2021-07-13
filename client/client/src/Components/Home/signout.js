import React from "react";
import {Link} from 'react-router-dom';
import 'firebase/auth';
import { Route } from 'react-router';
import firebase from '../../common/firebase-config';

import { useHistory } from 'react-router';
export const signout=()=>{
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    // [END auth_sign_out]
  }