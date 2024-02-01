import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Root = () => {
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[location.pathname]);

    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;