import React from 'react'
import { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { useTranslation } from 'react-i18next';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../Images/c-1.jpg";
import img2 from "../Images/c-2.jpeg";
import img3 from "../Images/c-3.jpg";
import img4 from "../Images/c-4.jpg";
import img5 from "../Images/c-5.jpg";
import img6 from "../Images/c-6.jpg";
import img7 from "../Images/c-7.jpg";
import img8 from "../Images/c-8.jpg";
import img9 from "../Images/c-9.png";
const Products = () => {
    const { t, i18n } = useTranslation();

    const options = {
        margin: 25,
        responsiveClass: true,
        nav: true,
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
    };
    const [cart, setCart] = useState([]);
    const [products] = useState([
        {
            id: 1,
            img: img1,
            title: "Giraffe Slub Knit T-Shirt",
            price: 16.99,
            amount: 1,
        },
        {
            id: 2,
            img: img2,
            title: "Rainbow soft toy",
            price: 19.99,
            amount: 1,
        },
        {
            id: 3,
            img: img3,
            title: "Dungarees with Pocket",
            price: 16.99,
            amount: 1,
        },
        {
            id: 4,
            img: img4,
            title: "Giraffe Slub Knit T-Shirt",
            price: 11.99,
        },
        {
            id: 5,
            img: img5,
            title: "Leopard T-Shirt",
            price: 4.99,
            amount: 1,
        },
        {
            id: 6,
            img: img6,
            title: "Giraffe Romper Suit",
            price: 15.99,
            amount: 1,
        }, {
            id: 7,
            img: img7,
            title: "Cotton Pajamas, 3 pieces",
            price: 9.99,
            amount: 1,
        }, {
            id: 8,
            img: img8,
            title: "Sweatshirt + T-Shirt + Bermudi Pack",
            price: 19.99,
            amount: 1,
        },
        {
            id: 9,
            img: img9,
            title: "Textured Dress with Frayed Detail",
            price: 19.99,
            amount: 1,
        }
    ])

    const addToCart = (product) => {
        console.log("dkm")
        setCart([...cart, product]);

    }

    return (
        <div className='carousel'>
            <div className="cartBalance ms-1">{cart.length}</div>
            <div className="carousel-main1">
                <OwlCarousel className='slider-items owl-carousel' {...options}>
                    {products.map((product, index) => (
                        <div className='d-flex flex-column' key={index}>
                            <div className="item d-flex justify-content-center flex-column">
                                <div className="imgCon">
                                    <img className='carouselImg' src={product.img} width={270} height={340} alt='' />
                                    <div onClick={() => addToCart(product)} className="selectBtn d-flex align-items-center justify-content-center">{t('cart.3')}</div>
                                </div>

                            </div>
                            <p>{product.title}</p>
                            <span><i class="fa-solid fa-dollar-sign"></i>{product.price}</span>
                        </div>
                    ))}

                </OwlCarousel>

            </div>

        </div>
    )
}

export default Products