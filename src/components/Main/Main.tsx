/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./Main.css";
import MainImg from "../../images/main.png";
import Autumn from "../../images/autumn.png";
import Summer from "../../images/summer.png";
import AboutIcon1 from "../../images/main-icon1.svg";
import AboutIcon2 from "../../images/main-icon2.svg";
import AboutIcon3 from "../../images/main-icon3.svg";
import AboutIcon4 from "../../images/main-icon4.svg";
import Winter from "../../images/main2.png";
// import AOS from 'oas'
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { FaTelegram } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import ProductDetails from "../ProductDetails/ProductDetails";
import CollectionData from "../../Data/ProductData";
import Footer from "../Footer/Footer";

const Main = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCollectionClick = (collection: any) => {
    setSelectedCollection((_prev) => (_prev = collection));
    navigate(`/product/${collection.name}`);
    window.scrollTo({ top: 0 });
  };

  if (selectedCollection) {
    return <ProductDetails data={selectedCollection} />;
  }

  return (
    <>
      <ToastContainer />
      <div className='containers'>
        <a
          href='https://t.me/Abboss03'
          target='_blank'
          className='fixed-telegram'
        >
          <div className='tg-text'>{t("nav-item4")}</div>
          <span className='tg-icon'>
            <FaTelegram className='telegram' />
          </span>
        </a>
        <Navbar />
      </div>
      <div className='main-container'>
        <div className='main'>
          <div
            data-aos='zoom-in-right'
            data-aos-delay='200'
            className='main-img '
          >
            <img
              data-aos='zoom-in'
              data-aos-delay='300'
              src={MainImg}
              alt=''
            />
          </div>
          <div
            data-aos='zoom-in-left'
            data-aos-delay='300'
            className='main-texts'
          >
            <h3 className='main-text'>{t("main-section1-text1")}</h3>
            <h2 className='main-text'>{t("main-section1-text2")}</h2>
            <h1 className='main-text'>{t("main-section1-text3")}</h1>
          </div>
        </div>
        <div className='main-about'>
          <div className='main-about-cards'>
            <div className='about-card'>
              <img src={AboutIcon1} className='about-img' alt='' />
              <div className='about-texts'>
                <span className='about-title'>
                  {t("main-section2-card-title1")}
                </span>
                <p className='about-descr'>
                  {t("main-section2-card-text1")}
                </p>
              </div>
            </div>
            <div className='about-card'>
              <img src={AboutIcon2} className='about-img' alt='' />
              <div className='about-texts'>
                <span className='about-title'>
                  {t("main-section2-card-title2")}
                </span>
                <p className='about-descr'>
                  {t("main-section2-card-text2")}
                </p>
              </div>
            </div>
            <div className='about-card'>
              <img src={AboutIcon3} className='about-img' alt='' />
              <div className='about-texts'>
                <span className='about-title'>
                  {t("main-section2-card-title3")}
                </span>
                <p className='about-descr'>
                  {t("main-section2-card-text3")}
                </p>
              </div>
            </div>
            <div className='about-card'>
              <img src={AboutIcon4} className='about-img' alt='' />
              <div className='about-texts'>
                <span className='about-title'>
                  {t("main-section2-card-title4")}
                </span>
                <p className='about-descr'>
                  {t("main-section2-card-text4")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='winter-collections fullCollection'>
          <div className='main-product'>
            <div
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='3000'
              className='product winter'
            >
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                className='product-card'
              >
                <span className='foiz'>100%</span>
                <span className='product-text'>
                  {t("main-section-umumiy-card-text1")}
                </span>
              </div>
              <div
                data-aos='fade-up'
                data-aos-duration='2000'
                className='product-img'
              >
                <img src={Winter} alt='' />
              </div>
              <div className='product-card'>
                <span
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-title'
                >
                  '{t("main-section-umumiy-card-title")}'
                </span>
                <span
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-text'
                >
                  {t("main-section-umumiy-card-text2")}
                </span>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-btn'
                >
                  <Link to='/shop' className='btn'>
                    {t("main-section-umumiy-card-button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='collection'>
            <div className='collection-title'>
              <span data-aos='zoom-in' className='title'>
                {t("main-collectionName1")}
              </span>
              <div data-aos='zoom-in' className='brend-text'>
                {t("main-brend")}
              </div>
            </div>
            <div className='collection-cards'>
              {CollectionData.filter(
                (item) =>
                  item.collectionName === "main-collectionName1",
              ).map((collection, ind) => (
                <div
                  data-aos='zoom-in-down'
                  data-aos-duration={`199${ind * 100}`}
                  className='collection-card'
                  key={ind}
                  onClick={() => handleCollectionClick(collection)}
                >
                  <div className='collection-img'>
                    <img src={collection.img} alt='' />
                  </div>
                  <span className='collection-name'>
                    {t(collection.name)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='autumn-collections fullCollection'>
          <div className='main-product'>
            <div className='product autumn'>
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                className='product-card'
              >
                <span className='foiz'>100%</span>
                <span className='product-text'>
                  {t("main-section-umumiy-card-text1")}
                </span>
              </div>
              <div
                data-aos='fade-up'
                data-aos-duration='2000'
                className='product-img'
              >
                <img src={Autumn} alt='' />
              </div>
              <div className='product-card'>
                <span
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-title'
                >
                  '{t("main-section-umumiy-card-title")}'
                </span>
                <span
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-text'
                >
                  {t("main-section-umumiy-card-text2")}
                </span>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-btn'
                >
                  <Link to='/shop' className='btn'>
                    {t("main-section-umumiy-card-button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='collection'>
            <div className='collection-title'>
              <span data-aos='zoom-in' className='title'>
                {t("main-collectionName2")}
              </span>
              <div data-aos='zoom-in' className='brend-text'>
                {t("main-brend")}
              </div>
            </div>
            <div className='collection-cards'>
              {CollectionData.filter(
                (item) =>
                  item.collectionName === "main-collectionName2",
              ).map((collection, ind) => (
                <div
                  data-aos='zoom-in-down'
                  data-aos-duration={`199${ind * 100}`}
                  className='collection-card'
                  key={ind}
                  onClick={() => handleCollectionClick(collection)}
                >
                  <div className='collection-img'>
                    <img src={collection.img} alt='' />
                  </div>
                  <span className='collection-name'>
                    {t(collection.name)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='summer-collections fullCollection'>
          <div className='main-product'>
            <div className='product summer'>
              <div
                data-aos-anchor-placement='top-bottom'
                data-aos-duration='3000'
                className='product-card'
              >
                <span className='foiz'>100%</span>
                <span className='product-text'>
                  {t("main-section-umumiy-card-text1")}
                </span>
              </div>
              <div
                data-aos='fade-up'
                data-aos-duration='2000'
                className='product-img'
              >
                <img src={Summer} alt='' />
              </div>
              <div className='product-card'>
                <span
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-title'
                >
                  '{t("main-section-umumiy-card-title")}'
                </span>
                <span
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-text'
                >
                  {t("main-section-umumiy-card-text2")}
                </span>
                <div
                  data-aos='fade-up'
                  data-aos-duration='1000'
                  className='product-btn'
                >
                  <Link to='/shop' className='btn'>
                    {t("main-section-umumiy-card-button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='collection'>
            <div className='collection-title'>
              <span data-aos='zoom-in' className='title'>
                {t("main-collectionName3")}
              </span>
              <div data-aos='zoom-in' className='brend-text'>
                {t("main-brend")}
              </div>
            </div>
            <div className='collection-cards'>
              {CollectionData.filter(
                (item) =>
                  item.collectionName === "main-collectionName3",
              ).map((collection, ind) => (
                <div
                  data-aos='zoom-in-down'
                  data-aos-duration={`199${ind * 100}`}
                  className='collection-card'
                  key={ind}
                  onClick={() => handleCollectionClick(collection)}
                >
                  <div className='collection-img'>
                    <img src={collection.img} alt='' />
                  </div>
                  <span className='collection-name'>
                    {t(collection.name)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
