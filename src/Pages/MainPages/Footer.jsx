import React from 'react'
import logo from "../Images/Logo-1.svg";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
         {/* Footer */}
      <footer className="text-center  bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex ">
        </section>
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="first-part col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex justify-content-around flex-column">
                {/* Content */}
                  <img className='logo' width={100} src={logo} alt="" />
                <p>
                7310 Fieldstone Lane <br />
                   Brooklyn, NY 11220
                </p>
                <h6>(708) 638-5584</h6>
                <div className="icons d-flex">
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram ms-3"></i></a>
                <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter ms-3"></i></a>
                <a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest ms-3"></i></a>
                </div>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                {t('footer.1')}
                </h6>
                <p>
                  <a href="#!" className="text-reset"> {t('footer.2')}</a>
                </p>
                <p>
                  <a href="#!" className="text-reset"> {t('footer.3')}</a>
                </p>
                <p>
                  <a href="#!" className="text-reset"> {t('footer.4')}</a>
                </p>
                <p>
                  <a href="#!" className="text-reset"> {t('footer.5')}</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                {t('footer.6')}
                </h6>
                <p>
                  <a href="#!" className="text-reset"> {t('footer.7')}</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4"> {t('footer.8')}</h6>
                <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
      </footer>
      {/* Footer */}
    </div>
  )
}

export default Footer