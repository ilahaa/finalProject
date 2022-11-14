import React from "react";
import bestSeller from "../datas/bestseller";
import BestsellerItems from "./BestsellerItems";
import { useTranslation } from 'react-i18next';

const Bestsellers = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bestSellers mt-5 d-flex justify-content-around align-items-center flex-column">
      <h1 className="mt-5">{t('bestseller.1')}</h1>
      <div className="gifts row container">
        {bestSeller.best.map((item, index) => (
          <BestsellerItems
            title={item.title}
            product={item}
            img={item.img}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
