import React from 'react'
import thirdPageMainImg from "../Images/thirdPageMain.jpg"
import thirdPage2 from "../Images/thirdPage2.jpg"
import handMadeLogo from "../Images/hand-hear.svg"
import { useTranslation } from 'react-i18next';
const ThirdPage = () => {
  const { t, i18n } = useTranslation();
  const handleClick=(lang)=>{
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="topImg">
      </div>
      <div className='ThirdPage'>
        <div className="ThirdPageItems row">
          <div data-aos="fade-up"
            data-aos-duration="1000" className="firstItem d-flex justify-content-center flex-column  col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="my-con container ms-3">
              <h6>SEE YA WINTER</h6>
              <h2>{t('thirdPage.1')}</h2>
              <p>{t('thirdPage.2')}</p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="1000" className="scndItem d-flex justify-content-center align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <img className='firstImg' width={400} height={579} src={thirdPageMainImg} alt="" />
            <img className='scndImg' width={240} height={290} src={thirdPage2} alt="" />

          </div>
          <div data-aos="fade-up"
            data-aos-duration="1000" className="thirdItem d-flex align-items-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="my-con-2 container d-flex justify-content-between flex-column">
              <img width={90} src={handMadeLogo} alt="" />
              <p className='mt-5'>{t('thirdPage.3')}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ThirdPage