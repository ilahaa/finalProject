import React from 'react'
import Nav from '../Nav'
import OvalLight from "../Images/Oval-light.svg"
import OvalYellow from "../Images/Oval-yellow.svg"
import OvalRed from "../Images/Oval-red.svg"
import OvalBlue from "../Images/Oval-blue.svg"
import MainImg from "../Images/mainPage.jpg"
import SunImg from "../Images/sun.svg"
import RainbowImg from "../Images/rainbow.svg"
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'
import SixthPage from './SixthPage'
import SeventhPage from './SeventhPage'
import EighthPage from './EighthPage'
import { CartProvider } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
const HomePage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div >
      <div className='MainPage'>
      <img className='ovallight' src={OvalLight} alt="" />
      <img className='ovalblue' src={OvalBlue} alt="" />
      <img className='ovalred' src={OvalRed} alt="" />
      <img className='ovalyellow' src={OvalYellow} alt="" />

     
        <div className="row mt-5 w-100 d-flex align-items-center justify-content-center">
          <div className="mainPageTexts d-flex  flex-column col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="container">
            <h1>{t('homePage.1')}</h1>
            <Link to="store"  data-aos="zoom-in" data-aos-duration="3000" className="explore d-flex align-items-center justify-content-around">
              {t('homePage.2')} <i class="fa-solid fa-arrow-right"></i>
            </Link>
            </div>

          </div>
          <div className="mainPageImages d-flex align-items-center justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 " >
           <div className="mainimg">
            <img  width={600} src={MainImg} alt="" />
            </div>
              <img data-aos="fade-left" data-aos-duration="3000" className='sunImg' src={SunImg} alt="" />
              <img data-aos="zoom-in" data-aos-duration="3000" className='rainbowImg' src={RainbowImg} alt="" />
          </div>
        </div>
      </div>
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
    </div>
  )
}

export default HomePage