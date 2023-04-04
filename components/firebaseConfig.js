// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDxBqriS1KBgC7y3EpsBqt01xOBzGRSTj4",

  authDomain: "solis-demo-project.firebaseapp.com",

  projectId: "solis-demo-project",

  storageBucket: "solis-demo-project.appspot.com",

  messagingSenderId: "699766851205",

  appId: "1:699766851205:web:1bb5ae23bdd86b4b830bec"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;