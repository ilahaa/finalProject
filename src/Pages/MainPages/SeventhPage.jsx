import React from 'react';
import ovalWhite from "../Images/Oval-white.svg"
import pathDots from "../Images/path-dots.svg"
import SeventhPageBoxes from './SeventhPageBoxes'
import { useTranslation } from 'react-i18next';

const SeventhPage = (props) => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div className='seventhPage d-flex flex-column'>
      <div className="pics">
        <img className='ovalWhite' width={94} src={ovalWhite} alt="" />
        <img className='pathDots' width={80} src={pathDots} alt="" /></div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className="row  d-flex justify-content-around m-2">
        <div className="firstBox d-flex justify-content-center flex-column col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <SeventhPageBoxes icon="fa-solid fa-hand-holding-heart fa-2x" title={t('seventhPage.1')} text={t('seventhPage.2')} /></div>
        <div className="secondBox d-flex justify-content-center flex-column col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
          <SeventhPageBoxes icon="fa-solid fa-star fa-2x" title={t('seventhPage.3')}  text={t('seventhPage.4')} />
        </div>
        <div className='firstBox d-flex justify-content-center flex-column col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
          <SeventhPageBoxes icon="fa-solid fa-heart fa-2x" title={t('seventhPage.5')}  text={t('seventhPage.6')} />
        </div>
      </div>
    </div>
  )
}

export default SeventhPage