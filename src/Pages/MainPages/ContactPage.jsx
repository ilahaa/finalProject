import React from 'react'
import Newsletter from "./Newsletter"
import path2 from "../Images/path-2.svg";
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div className='contactPage'>
        <div className="firstPartContactPage d-flex align-items-center justify-content-center flex-column">
            <h1 data-aos="fade-down" data-aos-duration="1000"  className=''>{t('contact.1')}</h1>
            <div className="contactOptions row container mt-5">
                <div data-aos="flip-left" data-aos-duration="2500" className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-regular fa-envelope fa-2x"></i>
                <div className="contactTxts d-flex flex-column ms-5">
                <h3>
                    <a href="mailto:hello@debebe.com">{t('contact.2')}</a>
                </h3>
                <p>hello@debebe.com</p>
                <span>(708) 638-5584</span>
                </div>

                </div>
                <div data-aos="flip-left" data-aos-duration="2500" className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-solid fa-map-location fa-2x"></i>
                <div className="contactTxts d-flex flex-column ms-5">
                <h3>
                    <a href="https://goo.gl/maps/yh5CBmv5Wh25RZWh8">{t('contact.3')}</a>
                </h3>
                <p>7310 Fieldstone Lane Brooklyn, NY 11220 USA</p>
                </div>
                </div>
                <div data-aos="flip-left" data-aos-duration="2500" className="insta d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-brands fa-instagram fa-2x"></i>
                <div className="contactTxts d-flex flex-column ms-5">
                <h3>
                    <a href="https://www.instagram.com/vamtam.themes/">{t('contact.4')}</a>
                </h3>
                <p>{t('contact.5')}</p>
                </div>
                </div>
            </div>

        </div>

        <div className="imgTop d-flex justify-content-center">
            <img  width={170} src={path2} alt="" />
        </div>
        <div className="secondPartContactPage d-flex align-items-center justify-content-center flex-column">
            <h6 data-aos="flip-down" data-aos-duration="1200">{t('contact.6')}</h6>
            <h2 data-aos="flip-down" data-aos-duration="1200">{t('contact.7')}</h2>
            <p data-aos="flip-down" data-aos-duration="1200">{t('contact.8')}</p>

       
            <div className='col-8 getInTouch' id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div data-aos="flip-down" data-aos-duration="1200" className="row">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                  <label htmlFor="name" className>{t('contact.9')}</label>
                    <input placeholder={t('contact.10')} type="text" id="name" name="name" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                  <label htmlFor="email" className>{t('contact.11')}</label>
                    <input placeholder={t('contact.12')} type="text" id="email" name="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" data-aos-duration="1200" className="row mt-3">
                <div className="col-md-12">
                  <div className="md-form">
                  <label htmlFor="message">{t('contact.13')}</label>
                    <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="flip-down" data-aos-duration="1200" className="sendBtn mt-3 d-flex justify-content-around align-items-center">{t('contact.14')}</div>
           

        </div>

      <Newsletter />
    </div>
  )
}

export default ContactPage