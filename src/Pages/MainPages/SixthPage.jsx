import React from 'react'
import { Link } from 'react-router-dom'
import mainImg from "../Images/sixthImg.jpg"
import oval from "../Images/Oval.svg"
import path from "../Images/path.svg"
import SinglecarouselItems from "../Carousel/singleCarousel";
import { useTranslation } from 'react-i18next';
import carousel3 from '../datas/data3';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const SixthPage = () => {
    const options ={
        responsiveClass: true,
        nav:true,
        autoplay: true,
        items: 1,
        navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
        singleItem: true,
        dots:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:1,
            }
        }

    }
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
      i18n.changeLanguage(lang);
    }
    return (
        <div className='SixthPage d-flex align-items-center justify-content-center'>
            <div data-aos="fade-up"
                data-aos-duration="1000" className="row container">
                <div className="imgItems col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <img className='mainImg' width={390} src={mainImg} alt="" />
                    <img className='oval' src={oval} alt="" />
                    <img className='path' src={path} alt="" />
                </div>
                <div className="txtItems d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="txtCon ms-5">
                        <h6>{t('sixthPage.1')}</h6>
                        <h2>{t('sixthPage.2')}</h2>
                        <p>{t('sixthPage.3')}</p>
                        <Link to="store" className="shopNowBtn d-flex align-items-center justify-content-around">{t('sixthPage.4')}<i class="fa-solid fa-arrow-right-long"></i></Link>
                    </div>
                </div>
                <div className="carouselItems mt-5 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className='carousel'>
            <div className="carousel-main1">
                <OwlCarousel className='slider-items owl-carousel' {...options}>
          {carousel3.data3.map((item, index) => (
          <SinglecarouselItems
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

export default SixthPage