import React from 'react'
import { useState } from 'react';
import footerImg from "../Images/footer-envelop-mailbox.svg";
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  const[alert,setAlert]=useState();
  const mySubmit = (e)=>{
    setAlert("The form was sent successfully.")
  }
  return (
    <div className='newsletter d-flex justify-content-center align-items-center flex-column'>
      <img className='footerImg' width={1100} src={footerImg} alt="" />
       <h3 className=''>{t('newsletter.1')}</h3>
       <p>{t('newsletter.2')}</p>
       <form onSubmit={mySubmit} className="form-floating mb-3 d-flex col-3">
        <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">{t('newsletter.3')}</label> 
        <button type="submit" className='ms-3 submitBtn'><i class="fa-solid fa-right-long fa-2x"></i></button>
      </form>
      <p className="myalert text-success">{alert}</p>
    </div>
  )
}

export default Newsletter;