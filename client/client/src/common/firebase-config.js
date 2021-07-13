import firebase from 'firebase/app';
import 'firebase/analytics';
import '@react-firebase/auth';
// var firebaseConfig = {
//    apiKey: "AIzaSyBCt4T7u7e414TTwsKUkkYNhOKLN-VKVc0",
//     authDomain: "mscloneauth.firebaseapp.com",
//     projectId: "mscloneauth",
//     storageBucket: "mscloneauth.appspot.com",
//     messagingSenderId: "911581638806",
//     appId: "1:911581638806:web:7ed99a4b1b8b4d0dfb92b7",
//     measurementId: "G-HGEDKZ7677"
//   };
  const firebaseConfig = {
    apiKey: "AIzaSyD9yqsd2PstDUe_C_xY3mNynM2DaPFZ6Gs",
    authDomain: "msclone4-d9a92.firebaseapp.com",
    projectId: "msclone4-d9a92",
    storageBucket: "msclone4-d9a92.appspot.com",
    messagingSenderId: "1007666981328",
    appId: "1:1007666981328:web:d64d17a09ca3c87d7db1d5",
    measurementId: "G-MT2207647E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;