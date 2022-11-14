import React from 'react'
import { Link } from 'react-router-dom'
import fifthMainImg from "../Images/fifthMainImg.webp";
import rainbow from "../Images/rainbow.svg";
import ovalRed from "../Images/banner-red-dot.svg"
import path from "../Images/path.svg"
import { useTranslation } from 'react-i18next';

const FifthPage = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="fifthTopImg">
      </div>
      <div className='fifthPage'>
        <div className="w-100 h-100 row d-flex align-items-center ms-5">
          <div data-aos="fade-up"
            data-aos-duration="1000" className="fifthPageTxts d-flex justify-content-center flex-column col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
            <h1>{t('fifthPage.1')}</h1>
            <h2 className='mt-3'>{t('fifthPage.2')}</h2>
            <Link to="bestsellers" className="shopNowBtn mt-3 d-flex align-items-center justify-content-around">{t('fifthPage.3')} <i class="fa-solid fa-arrow-right-long"></i></Link>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="1000" className="fifthPageImgs d-flex align-items-center col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
            <img className='mainImg' src={fifthMainImg} alt="" />
            <img className='rainbow' src={rainbow} alt="" />
            <img className='oval-Red' src={ovalRed} alt="" />
            <img className='path' src={path} alt="" />
          </div>
        </div>
      </div>
      <div className="fifthBottomImg"></div>
    </>
  )
}

export default FifthPage