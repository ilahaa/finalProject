import React from 'react'
import blogImg from "../Images/eight1.jpg"
import bear from "../Images/bear.svg"
import blog1 from "../Images/blog1.jpg"
import blog2 from "../Images/blog2.jpg"
import blog3 from "../Images/blog3.jpg"
import BlogBoxes from './BlogBoxes'
import Newsletter from './Newsletter';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className='blogPage d-flex align-items-center justify-content-center flex-column'>
        <div data-aos="fade-down"
          data-aos-duration="1000" className="header"><h1>{t('blog.1')}</h1></div>
        <div className="topimage"></div>
        <div className="our-blog d-flex align-items-center">
          <div className="myContainer row container">
            <div className="blogImg d-flex align-items-center justify-content-center flex-column col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
              <div data-aos="fade-down"
            data-aos-duration="1000" className="conImg">
                <img width={600} src={blogImg} alt="" /></div>
            </div>
            <div className="blogTexts d-flex flex-column justify-content-center col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
              <h3>{t('blog.2')}</h3>
              <span className='mt-3'>{t('blog.3')}</span>
              <a href='https://debebe.vamtam.com/keep-your-childs-mind-active-this-summer/' className="readMore mt-3">{t('blog.4')} </a>
            </div>
          </div>

        </div>
        <img data-aos="fade-up"
     data-aos-duration="1000" className='bear' width={120} src={bear} alt="" />
        <div  className="blogPartTwo">
          <div className="row m-5">
            <BlogBoxes picture={blog1} text={t('blog.5')} />
            <BlogBoxes picture={blog2} text={t('blog.6')} />
            <BlogBoxes picture={blog3} text={t('blog.7')} />
          </div>
        </div>
        <Newsletter />
      </div>
    </>
  )
}

export default BlogPage