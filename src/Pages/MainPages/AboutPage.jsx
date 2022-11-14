import React from 'react';
import path3 from "../Images/path-3.svg";
import lion from "../Images/lion.svg";
import giraffe from "../Images/giraffe.svg";
import horse from "../Images/hors.svg";
import aboutus from "../Images/aboutus.jpg";
import Newsletter from './Newsletter';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
      i18n.changeLanguage(lang);
    }
    return (
        <>
            <div className='aboutUsPage mt-5'>
                {/* first */}
                <div className="firstPartAbout  w-100 d-flex align-items-center justify-content-center">
                    <div className="firstPartTexts h-100 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 d-flex align-items-center justify-content-around flex-column">
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000" className='mt-5'>{t('about.1')}</h1>
                        <h4 data-aos="fade-up"
                            data-aos-duration="1000">{t('about.2')}</h4>
                        <img src={path3} alt="" />
                    </div>
                    <img data-aos="zoom-out-left" className='lion' src={lion} alt="" />
                    <img className='giraffe' src={giraffe} alt="" />
                </div>
                {/* second */}
                <div className="secondPartAbout">
                    <div className="row container h-100">
                        <div data-aos="fade-up"
                            data-aos-duration="1000" className="secondPartImages d-flex flex-column align-items-center justify-content-center col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                            <img className='mainImg' width={480} src={aboutus} alt="" />
                            <img className='pathImg' width={150} src={path3} alt="" />
                        </div>
                        <div className="secondPartTexts d-flex justify-content-center flex-column col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                            <div data-aos="fade-up"
                                data-aos-duration="1000" className="txts">
                                <h2>{t('about.3')}</h2>
                                <p>{t('about.4')}</p></div>
                            <img className='horse' width={100} src={horse} alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
        </>
    )
}

export default AboutPage