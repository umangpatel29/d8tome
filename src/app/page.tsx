"use client"
import React, { useEffect, useState } from 'react';
import HomePage from '@/components/home';
import Footer from '@/components/common/footer';
import LoginPage from './login/page';
import { useUser } from '@/context/useContext';
import Navbar from '@/components/common/navbar';
import Spinner from '@/components/spinner/Spinner';

const Home = () => {
  const { isAccountCreated, setIsAccountCreated } = useUser();
  const [loading, setLoading] = useState(true);
  let accountCreated
  if (typeof window !== 'undefined') {
    accountCreated = localStorage.getItem('accountCreated');
  }
  if (accountCreated) {
    setIsAccountCreated(true)
  } else {
    setIsAccountCreated(false)
  }

  useEffect(() => {
    setLoading(false); // Set loading to false when the component mounts
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex h-screen justify-center items-center'><Spinner color="#e5e7eb" textColor="#FF0080" /></div>
      ) : (
        <>
          {(isAccountCreated) ? (
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          ) : (
            <LoginPage />
          )}
        </>
      )}
    </>
  );
};

export default Home;
