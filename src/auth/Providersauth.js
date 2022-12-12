import {  signInWithPopup, GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";
import {auth,provider,provider2} from '../config/firebase'
import {signUp,login}from "./Auth";

export  const Google=(type)=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user.providerData[0];
      if(type ==='signup'){
       signUp({username:user.displayName,email:user.email,password:user.uid,image:user.photoURL})
      }else{
        login({email:user.email,password:user.uid})
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
export const Facebook = ()=>{
signInWithPopup(auth, provider2)
  .then((result) => {
    // The signed-in user info.
    const user = result.user.providerData[0];
    if(type ==='signup'){
        signUp({username:user.displayName,email:user.email,password:user.uid,image:user.photoURL})
       }else{
         login({email:user.email,password:user.uid})
       }
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
}