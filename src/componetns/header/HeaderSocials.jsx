import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/feed/?trk=nav_back_to_linkedin' target="_blank"><LinkedInIcon/></a>
      <a href='https://github.com/Albert200024' target="_blank"><GitHubIcon/></a>
      <a href='https://www.facebook.com/albert.gumashyan.3/' target="_blank"><FacebookIcon/></a>
    </div>
  )
}

export default HeaderSocials
