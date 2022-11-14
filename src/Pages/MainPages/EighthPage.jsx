import React from 'react'
import pic1 from "../Images/eight-1.jpg"
import pic2 from "../Images/eight-2.jpg"
import pic3 from "../Images/eight-3.jpg"
import pic4 from "../Images/eight-4.jpg";
import EighthPageItems from './EighthPageItems';
import { useTranslation } from 'react-i18next';

const EighthPage = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="mt-3 topImg">
      </div>
      <div data-aos="fade-up"
        data-aos-duration="1000" className='EightPage d-flex align-items-center justify-content-around flex-column'>

        <h4>
          <a href="https://www.instagram.com/vamtam.themes">{t('eightPage.1')}</a>
        </h4>

        <div className="eightItems m-3 row d-flex align-items-center justify-content-around">
          <EighthPageItems image={pic1} />
          <EighthPageItems image={pic2} />
          <EighthPageItems image={pic3} />
          <EighthPageItems image={pic4} />


        </div>

      </div>

    </>
  )
}

export default EighthPage