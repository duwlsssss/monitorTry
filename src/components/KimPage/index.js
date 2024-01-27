import React,{useState,useEffect} from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import MyMyoungham from './MyMyoungham';
import AboutUs from './AboutUs';
import Main from './Main';
import NotFound from './NotFound';

export function KimPage() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/MyMyoungham" element={<MyMyoungham />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default KimPage;

