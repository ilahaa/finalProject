import React from 'react'
import { ReactDOM } from 'react-dom';
import { useState } from 'react';
import userData from "../datas/userData";
import { useTranslation } from 'react-i18next';
const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
    const [user,setUser] = useState();
    const [pass,setPass] = useState();
    const [alert,setAlert] = useState();
    const [color,setColor] = useState();
  const mySubmit = (e)=>{
    e.preventDefault();
    if ((user === userData.users[0].username)&&(pass === userData.users[0].pass)) {
      setAlert(userData.users[0].name+ " " +userData.users[0].surname)
      setColor("alert alert-success")
  
    }else{
      setAlert("UserName or Password is incorrect!")
      setColor("alert alert-danger")

    }
  }

  return (
    <div className='loginPage mt-5 d-flex align-items-center justify-content-center flex-column'>
        <div className="titles mt-3 d-flex align-items-center justify-content-around flex-column">
        <h1 className='mt-5'>{t('loginPage.1')}</h1>
        <h4>{t('loginPage.2')}</h4>
        <h5>{t('loginPage.3')}</h5></div>

        {/* ************ */}
        <form onSubmit={mySubmit} className='mb-5 col-4'>
        <p className={color}>{alert}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">{t('loginPage.4')}</label>
          <input onChange={(e)=>{setUser(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="">
          <label htmlFor="exampleInputPassword1" className="form-label">{t('loginPage.5')}</label>
          <input onChange={(e)=>{setPass(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label  className="form-check-label" htmlFor="exampleCheck1">{t('loginPage.6')}</label>
        </div>
        <button type="submit" className="btn btn-primary">{t('loginPage.7')}</button>
      </form>
    </div>
  )
}


export default LoginPage