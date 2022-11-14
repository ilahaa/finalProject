import React from 'react'
import { useTranslation } from 'react-i18next';
import Carousel from '../Carousel/carousel';
import carousel2 from '../datas/data2';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const FourthPage = () => {
  const options = {
    margin: 25,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    items: 4,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    }
}
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <div className="fourthPage">
        <div data-aos="fade-up"
          data-aos-duration="1000" className="ScndTexts d-flex justify-content-center align-items-center flex-column">
          <p>{t('fourthPage.1')}</p>
          <h2>{t('fourthPage.2')}</h2>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="1000" className="ScndItems container mt-5">
             <div className='carousel'>
            <div className="carousel-main1">
                <OwlCarousel className='slider-items owl-carousel' {...options}>
          {carousel2.data2.map((item, index) => (
          <Carousel
            title={item.title}
            product={item}
            img={item.img}
            price={item.price}
            key={index}
          />
        ))}</OwlCarousel>

        </div>

    </div>
        </div>
      </div>
    </div>
  )
}

export default FourthPage