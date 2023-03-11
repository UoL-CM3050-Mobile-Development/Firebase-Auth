import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAK_tYzMgru9iYBb7OzTi6FluLmnX5k9Xw',
  authDomain: 'fir-auth-17698.firebaseapp.com',
  projectId: 'fir-auth-17698',
  storageBucket: 'fir-auth-17698.appspot.com',
  messagingSenderId: '84325208242',
  appId: '1:84325208242:web:4536d1e5dbd60872b2b9ab',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

// // =========================

// import * as firebase from 'firebase';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyAK_tYzMgru9iYBb7OzTi6FluLmnX5k9Xw',
//   authDomain: 'fir-auth-17698.firebaseapp.com',
//   projectId: 'fir-auth-17698',
//   storageBucket: 'fir-auth-17698.appspot.com',
//   messagingSenderId: '84325208242',
//   appId: '1:84325208242:web:4536d1e5dbd60872b2b9ab',
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }
// const auth = firebase.auth();

// export { auth };
