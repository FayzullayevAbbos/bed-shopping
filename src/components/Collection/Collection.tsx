/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./Collection.css";
import {
  FaChevronDown,
  FaChevronRight,
  FaSearch,
  FaTelegram,
} from "react-icons/fa";
// import CollectionData from "../../Data/ProductData";
import { Link, useNavigate } from "react-router-dom";
// import ProductDetails from "../ProductDetails/ProductDetails";
import { useTranslation } from "react-i18next";
import CollectionData from "../../Data/ProductData";
import ProductDetails from "../ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Collection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [searchCollection, setSearchCollection] = useState("");
  const [filteredCollection, setFilteredCollection] =
    useState(CollectionData);

  const handleShowCategoryClick = () => {
    setShowCategory(!showCategory);
  };

  const handleCollectionClick = (collection: any) => {
    setSelectedCollection(collection);
    navigate(`/product/${t(collection.name)}`);
    window.scrollTo({ top: 0 });
  };

  const handleSearchChange = (e: { target: { value: string } }) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = CollectionData.filter((item) =>
      t(item.name).toLowerCase().includes(searchText),
    );
    setFilteredCollection(filtered);
  };

  const handleItem1 = () => {
    navigate(`/product-category/${t("main-collectionName2")}`);
    window.scrollTo({ top: 0 });
  };
  const handleItem2 = () => {
    navigate(`/product-category/${t("main-collectionName4")}`);
    window.scrollTo({ top: 0 });
  };
  const handleItem3 = () => {
    navigate(`/product-category/${t("main-collectionName1")}`);
    window.scrollTo({ top: 0 });
  };
  const handleItem4 = () => {
    navigate(`/product-category/${t("main-collectionName3")}`);
    window.scrollTo({ top: 0 });
  };

  if (selectedCollection) {
    return <ProductDetails data={selectedCollection} />;
  }

  return (
    <>
      <ToastContainer />
      <div className='containers'>
        <a href='' target='_blank' className='fixed-telegram'>
          <div className='tg-text'>{t("nav-item4")}</div>
          <span className='tg-icon'>
            <FaTelegram className='telegram' />
          </span>
        </a>
        <Navbar />
      </div>
      <div className='shop-container'>
        <div className='shop-left'>
          <div className='search-container'>
            <input
              type='text'
              placeholder={t("collection-search-placeholder")}
              className='search-input'
              value={searchCollection}
              onChange={handleSearchChange}
              autoComplete='off'
            />
            <div className='icon-con'>
              <FaSearch className='search-icon' />
            </div>
          </div>
          <div className='shop-left-dropdown'>
            <div
              className='shop-left-title'
              onClick={handleShowCategoryClick}
            >
              <span className='title-collection'>
                {t("nav-item2")}
              </span>
              {showCategory ? (
                <FaChevronDown className='icon-collection' />
              ) : (
                <FaChevronRight className='icon-collection' />
              )}
            </div>
            <div
              className={`shop-left-items ${
                showCategory ? "active" : ""
              }`}
            >
              <a className='shop-left-link' onClick={handleItem1}>
                {t("main-collectionName2")}
              </a>
              <a className='shop-left-link' onClick={handleItem2}>
                {t("main-collectionName4")}
              </a>
              <a className='shop-left-link' onClick={handleItem3}>
                {t("main-collectionName1")}
              </a>
              <a className='shop-left-link' onClick={handleItem4}>
                {t("main-collectionName3")}
              </a>
            </div>
          </div>
        </div>
        <div className='shop-right'>
          <div className='shop-right-title'>
            <div className='collection-length'>
              <span className='uzunlik'>{t("nav-item2")}</span>
            </div>
            <Link to='/contact-us'>
              <button className='right-buttons-contact'>
                {t("contact-title")}
              </button>
            </Link>
          </div>
          <div className='shop-right-cards'>
            {filteredCollection.map((collection, index) => (
              <div
              data-aos='zoom-in-down'
                  data-aos-duration={`199${index * 100}`}
                className='shop-right-card'
                key={index}
                onClick={() => handleCollectionClick(collection)}
              >
                <div className='shop-right-card-img'>
                  <img src={collection.img} alt='' />
                </div>
                <span className='shop-right-card-text'>
                  {t(collection.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collection;
