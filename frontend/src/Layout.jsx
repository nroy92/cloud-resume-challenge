import { useEffect, useState } from 'react'
import Header from './components/Header'
import ResumePage from './pages/ResumePage'
import { Outlet, NavLink, useLocation } from "react-router";
import './assets/stylesheets/default.css'

export default function Layout() {
  const location = useLocation();


  let pageName = ''
  useEffect(() => {
    if(location.pathname === "/"){
      const pageName = 'home'
    }else if(location.pathname === "/resume"){
      const pageName = 'resume'
    }else if(location.pathname === "projects"){
      const pageName = 'projects'
    }
    document.body.setAttribute("location", pageName);
    return () => {
      document.body.removeAttribute("location");
    };
  },[location]);

  return (
    <>
      <Header></Header>
      <div className="content_wrap">
        <div className="content">
            <article>
              <Outlet />
            </article>
        </div>
      </div>
    </>
  )
}