import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

const provider = new GoogleAuthProvider();
import { getAuth } from "firebase/auth";

const Login = () => {

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider).then((result) => {

            const user = result.user;

        }).catch((error) => {

            const errorMessage = error.message;
            const email = - error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <button className='bg-blue-600 px-8 py-2 text-white' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
