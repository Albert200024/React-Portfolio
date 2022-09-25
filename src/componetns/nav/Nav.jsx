import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MessageIcon from '@mui/icons-material/Message';
import './nav.css'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
        <a href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><HomeIcon/></a>
        <a href='#about' className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")}><PersonIcon/></a>
        <a href='#experience' className={activeNav === "#experience" ? "active" : ""} onClick={() => setActiveNav("#experience")}><LibraryBooksIcon/></a>
        <a href='#services' className={activeNav === "#services" ? "active" : ""} onClick={() => setActiveNav("#services")}><SettingsSuggestIcon/></a>
        <a href='#contact' className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav("#contact")}><MessageIcon/></a>
    </nav>
  )
}

export default Nav
