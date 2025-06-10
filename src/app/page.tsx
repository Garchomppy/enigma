"use client";
import React from 'react';
import { useState, useEffect } from 'react'
import { LoginPage } from '../component/login/loginPage';
import { SignUpPage } from '../component/signUp/signUpPage';
import { CreatePass } from '@/component/createpassword/createPass';
import { ResetPass } from '@/component/resetPass/resetPass';
import { ForgotPass } from '@/component/forgotPass/forgotPass';
import { CheckPass } from '@/component/checkMail/checkPass';
import HomePage from '../component/home/homePage'
import Footer from '../component/footer'
import LandingPage from '../component/landing/landingPage'
import TaskPage from '@/component/taskPage/taskPage';
import { VerifyEmail } from '@/component/verifyEmail/verifyEmail';
import { ForgotEmail } from '@/component/verifyEmail/forgotEmail';
import JobDetailPage from '@/component/jobDetail/jobDetailPage';
import Content from '@/component/jobDetail/content';
import SlideOutMenu from '@/component/filterPage/filterPage';
import DatePickerMenu from '@/component/filterPage/calendar';
import Location from '@/component/filterPage/locationFilter';
import DistanceFilter from '@/component/filterPage/distance';
import SearchBar from '@/component/searchBar';
import UserManagement from '@/component/admin/userManager/userManager';
import UserDetail from '@/component/admin/userDetail/userDetail';

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    // <SignUpPage />
    // <CreatePass />
    // <ResetPass />
    // <ForgotPass />
    // <CheckPass />
    // <HomePage />
    <TaskPage />
    // <LandingPage />
    // <LoginPage />
    // <Footer />
    // <VerifyEmail />
    // <ForgotEmail />
    // <JobDetailPage />
    // <Content />
    // <SlideOutMenu />
    // <DistanceFilter />
    // <DatePickerMenu />
    // <Location />
    // <SearchBar />
    // <UserManagement />
    // <UserDetail />
  );
}
