import {initializeApp} from 'firebase/app';
import { getAuth ,GoogleAuthProvider  } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC07XK2QZL8Cij5vHFEyQw_q7d31ImvZig",
    authDomain: "blog-b0d97.firebaseapp.com",
    projectId: "blog-b0d97",
    storageBucket: "blog-b0d97.appspot.com",
    messagingSenderId: "898498954602",
    appId: "1:898498954602:web:134bffb48a9ded0bf61113"
  };

const app=initializeApp(firebaseConfig)  
export const auth = getAuth(app);  
export const provider=new GoogleAuthProvider() 
export const provider2 = new FacebookAuthProvider();

