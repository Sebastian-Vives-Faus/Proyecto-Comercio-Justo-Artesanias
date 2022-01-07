// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'; //v9
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeu3o8QLOca6Od8lKtmFfLle49jZVOzaY",
  authDomain: "comercio-justo.firebaseapp.com",
  projectId: "comercio-justo",
  storageBucket: "comercio-justo.appspot.com",
  messagingSenderId: "188366317299",
  appId: "1:188366317299:web:36e791549eb2430cd33986",
  measurementId: "G-7G6488LGRG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
/*
const app = initializeApp(firebaseConfig);
const auth = app.auth();
const googleAuthProvider = new app.auth.GoogleAuthProvider();
const analytics = getAnalytics(app);

export {auth, googleAuthProvider, app}
*/