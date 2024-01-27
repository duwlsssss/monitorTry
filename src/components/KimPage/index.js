import React,{useState,useEffect} from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import MyMyoungham from './MyMyoungham';
import AboutUs from './AboutUs';
import Main from './Main';
import NotFound from './NotFound';

export function KimPage() {
  const [route, setRoute] = useState('main');
  const location = useLocation();

  useEffect(() => {
    // 현재 경로(location.pathname)에 따라 route 상태 업데이트
    const currentPath = location.pathname.replace('/', '') || 'main';
    setRoute(currentPath);
    console.log(currentPath);
  }, [location]);

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

