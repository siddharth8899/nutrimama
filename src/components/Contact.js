import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import '../css/Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [cpyNo, setCpyNo] = useState(false);
  const [cpyID, setCpyID] = useState(false);
  const copyNumber = () => {
    navigator.clipboard.writeText('+91 72909 73115');
    setCpyNo(true);
    setTimeout(() => {
      setCpyNo(false);
    }, 3000);
  };

  const copyID = () => {
    navigator.clipboard.writeText('nutrimama98@gmail.com');
    setCpyID(true);
    setTimeout(() => {
      setCpyID(false);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0,0)
   }, [])

  return (
    <>
      <div className='cntct-us'>
        <Link style={{ textDecoration: 'none', color: '#21a0e3' }} to="/contact">
          Contact Us
        </Link>
      </div>
      <div className='ppr-bx'>
        <Paper elevation={3} className='contact-us-box'>

          <div className='call' onClick={copyNumber}><CallIcon className='phn' />
            +91 72909 73115
            <ContentCopyIcon style={{ height: '10px', width: '10px', margin: '0 7px 2px' }} />
            {
              cpyNo ? <span className='copy'>Copied!!</span> : <></>
            }
          </div>

          <div className='smlnks'>

            <span><WhatsAppIcon className='wa' /><a href='https://api.whatsapp.com/send/?phone=917290973115' target={'_blank'} rel="noreferrer">Click to Chat with us</a></span>

            <span onClick={copyID}><EmailIcon className='mail' />
              <span >
                Write to us at nutrimama98@gmail.com
                <ContentCopyIcon style={{ height: '10px', width: '10px', margin: '0 7px 2px' }} />
                {
                  cpyID ? <div className='copy-id'>Copied!!</div> : <></>
                }
              </span>
            </span>
          </div>
        </Paper>

        <Paper elevation={3} className='contact-us-box'>
          <div className='smlnks'>
            <span><FacebookIcon className='fb' /><a href='https://www.facebook.com/nutrimama.india/' target={'_blank'} rel="noreferrer">nutrimama.india</a></span>
            <span><InstagramIcon className='insta' /><a href='https://www.instagram.com/nutrimama_india/' target={'_blank'} rel="noreferrer">nutrimama_india</a></span>
            <span><TwitterIcon className='twtr' /><a href='https://twitter.com/nutrimama_india' target={'_blank'} rel="noreferrer">nutrimama_india</a></span>
            <span><YouTubeIcon className='yt' /><a href='https://www.youtube.com/channel/UCpj53QScJgh6g5AcNazTBaA' target={'_blank'} rel="noreferrer">NutriMama</a></span>
          </div>
        </Paper>
      </div>
    </>
  )
}
export default Contact