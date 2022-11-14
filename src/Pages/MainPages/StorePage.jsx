import React from 'react'
import StoreElement from "./StoreElement";
import Newsletter from "./Newsletter";
import toy1 from "../Images/toy1.jpeg";
import toy2 from "../Images/toy2.jpeg";
import toy3 from "../Images/toy3.jpeg";
import toy4 from "../Images/toy4.jpeg";
import toy5 from "../Images/toy5.webp";
import toy6 from "../Images/toy6.webp";
import toy7 from "../Images/toy7.webp";
import toy8 from "../Images/toy8.jpeg";
import toy9 from "../Images/toy9.webp";
import girl1 from "../Images/girl1.webp";
import girl2 from "../Images/girl2.webp";
import girl3 from "../Images/girl3.webp";
import girl4 from "../Images/girl4.webp";
import girl5 from "../Images/girl5.jpeg";
import girl6 from "../Images/girl6.jpg";
import girl7 from "../Images/girl7.jpg";
import girl8 from "../Images/girl8.jpeg";
import girl9 from "../Images/girl9.webp";
import boy1 from "../Images/boy1.jpeg";
import boy2 from "../Images/boy2.jpg";
import boy3 from "../Images/boy3.jpg";
import boy4 from "../Images/boy4.jpeg";
import boy5 from "../Images/boy5.jpeg";
import boy6 from "../Images/boy6.jpg";
import boy7 from "../Images/boy7.jpg";
import boy8 from "../Images/boy8.jpg";
import boy9 from "../Images/boy9.jpg";
import shoes1 from "../Images/shoes1.jpeg";
import shoes2 from "../Images/shoes2.jpeg";
import shoes3 from "../Images/shoes3.jpeg";
import shoes4 from "../Images/shoes4.jpeg";
import shoes5 from "../Images/shoes5.jpeg";
import shoes6 from "../Images/shoes6.jpeg";
import shoes7 from "../Images/shoes7.jpeg";
import shoes8 from "../Images/shoes8.jpeg";
import shoes9 from "../Images/shoes9.jpeg";
import { useState , useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const StorePage = () => {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  const[item1,action1]=useState(toy1);
  useEffect(
    ()=>{}, [item1]
  )
  const[item2,action2]=useState(toy2);
  useEffect(
    ()=>{}, [item2]
  )
  const[item3,action3]=useState(toy3);
  useEffect(
    ()=>{}, [item3]
  )
  const[item4,action4]=useState(toy4);
  useEffect(
    ()=>{}, [item4]
  )
  const[item5,action5]=useState(toy5);
  useEffect(
    ()=>{}, [item5]
  )
  const[item6,action6]=useState(toy6);
  useEffect(
    ()=>{}, [item6]
  )
  const[item7,action7]=useState(toy7);
  useEffect(
    ()=>{}, [item7]
  )
  const[item8,action8]=useState(toy8);
  useEffect(
    ()=>{}, [item8]
  )
  const[item9,action9]=useState(toy9);
  useEffect(
    ()=>{}, [item9]
  )
  return (
    <div className='storePage'>
      <div className="row">
        <div className="stateComponents mt-5 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
          <ul>
            <li onClick={()=>[
              action1(toy1),
              action2(toy2),
              action3(toy3),
              action4(toy4),
              action5(toy5),
              action6(toy6),
              action7(toy7),
              action8(toy8),
              action9(toy9),
            ]}>{t('store.2')}</li> <hr />
            <li onClick={()=>[
              action1(girl1),
              action2(girl2),
              action3(girl3),
              action4(girl4),
              action5(girl5),
              action6(girl6),
              action7(girl7),
              action8(girl8),
              action9(girl9),
            ]}>{t('store.3')}</li> <hr />
            <li onClick={()=>[
              action1(boy1),
              action2(boy2),
              action3(boy3),
              action4(boy4),
              action5(boy5),
              action6(boy6),
              action7(boy7),
              action8(boy8),
              action9(boy9),
            ]}>{t('store.4')}</li> <hr />
            <li onClick={()=>[
              action1(shoes1),
              action2(shoes2),
              action3(shoes3),
              action4(shoes4),
              action5(shoes5),
              action6(shoes6),
              action7(shoes7),
              action8(shoes8),
              action9(shoes9),
            ]}>{t('store.5')}</li> <hr />
          </ul>
        </div>
        <div className="storeElements col-xl-9 col-lg-9 col-md-9 col-sm-6 col-6">
          <h1>{t('store.1')}</h1>
          <div className="row storeProducts">
            <StoreElement img={item1} title="Baby blanket made of cotton muslin" price="19.99" />
            <StoreElement img={item2} title="Bear soft toy" price="24.99"/>
            <StoreElement img={item3} title="Bee soft toy" price="9.99" />
            <StoreElement img={item4} title="Bird soft toy" price="9.99" />
            <StoreElement img={item5} title="Cherry soft toy" price="24.99" />
            <StoreElement img={item6} title="Elephant soft toy" price="9.99" />
            <StoreElement img={item7} title="Great soft toy" price="54.99" />
            <StoreElement img={item8} title="Rainbow soft toy" price="19.99" />
            <StoreElement img={item9} title="Soft alpaca toy" price="54.99" />
          </div>
        </div>
      </div>
<Newsletter />

    </div>
  )
}

export default StorePage