import React, { useEffect } from 'react';
// import { GoogleButton } from 'react-google-button';
import GoogleButton from 'react-google-button'
// import { UserAuth } from '../context/AuthContext';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='border-8 border-sky-500'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;
