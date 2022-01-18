import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/500.css';

import {SiteIndex} from "./SiteIndex/SiteIndex"

// Firebase
import firebase from './config/firebase-config';
//import 'firebase/auth';

function App() {  
  return (
    <>
      <SiteIndex/>
    </>
  );
}

export default App;
