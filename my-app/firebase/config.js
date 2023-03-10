// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCixyNuvpk6Gwh0kbMW6YGnvQBPoW5etLU',
  authDomain: 'reactnativefirebase-9db77.firebaseapp.com',
  projectId: 'reactnativefirebase-9db77',
  storageBucket: 'reactnativefirebase-9db77.appspot.com',
  messagingSenderId: '537420476441',
  appId: '1:537420476441:web:abb75e6216fd41336d3a88',
  measurementId: 'G-68XW0T7JND',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// =================

// import * as firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: 'AIzaSyCixyNuvpk6Gwh0kbMW6YGnvQBPoW5etLU',
//   authDomain: 'reactnativefirebase-9db77.firebaseapp.com',
//   projectId: 'reactnativefirebase-9db77',
//   storageBucket: 'reactnativefirebase-9db77.appspot.com',
//   messagingSenderId: '537420476441',
//   appId: '1:537420476441:web:abb75e6216fd41336d3a88',
//   measurementId: 'G-68XW0T7JND',
// };
// firebase.initializeApp(firebaseConfig);
// export default firebase;
