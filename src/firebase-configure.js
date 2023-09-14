import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA3pwRlDbuHXfXuRPfblXl9FrDcG8AK1z0",
    authDomain: "login-register-form-e7d85.firebaseapp.com",
    projectId: "login-register-form-e7d85",
    storageBucket: "login-register-form-e7d85.appspot.com",
    messagingSenderId: "862745033862",
    appId: "1:862745033862:web:eb6fad3f4da27dcb07e507",
    measurementId: "G-Q0BS2RWYG3"
  };

  const app= initializeApp(firebaseConfig);
  export const auth = getAuth(app);
