/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, useEffect, useState } from "react";
import "./ProductCategory.css";
import {
  FaChevronRight,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CollectionData from "../../Data/ProductData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const ProductCategory = ({ data }: any) => {
  const [showCategory, setShowCategory] = useState(false);
  const { collectionName } = useParams();
  const { t } = useTranslation();
  const [filteredCollection, setFilteredCollection] = useState(
    data.filter(
      (item: { collectionName: any | string | string[] }) =>
        t(item.collectionName) === collectionName,
    ),
  );
  const [searchCollection, setSearchCollection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCategory = data.filter(
      (category: { collectionName: any | string | string[] }) =>
        t(category.collectionName) === collectionName,
    );
    setFilteredCollection(selectedCategory);
  }, [collectionName]);

  const handleClickProduct = (category: {
    img?: string | undefined;
    name: any;
  }) => {
    navigate(`/product/${t(category.name)}`);
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

  const handlShowCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <>
      <ToastContainer />
      <div className='containers'>
        <Navbar />
      </div>
      <div className='category-section'>
        <div className='category-left'>
          <div className='search-input-container'>
            <input
              type='text'
              placeholder={t("collection-search-placeholder")}
              value={searchCollection}
              onChange={handleSearchChange}
              className='search-input'
              autoComplete='off'
            />
            <div className='icon-con'>
              <FaSearch className='search-icon' />
            </div>
          </div>
          <div className='category-dropdown'>
            <div
              className='category-title'
              onClick={handlShowCategory}
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
              className={`category-items ${
                showCategory ? "active" : null
              }`}
            >
              <a className='category-link' onClick={handleItem1}>
                <span className='category-item'>
                  {t("main-collectionName2")}
                </span>
              </a>
              <a className='category-link' onClick={handleItem2}>
                <span className='category-item'>
                  {t("main-collectionName4")}
                </span>
              </a>
              <a className='category-link' onClick={handleItem3}>
                <span className='category-item'>
                  {t("main-collectionName1")}
                </span>
              </a>
              <a className='category-link' onClick={handleItem4}>
                <span className='category-item'>
                  {t("main-collectionName3")}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='category-right'>
          <div className='right-title'>
            <div className='collection-length'>
              <span className='uzunlik'>{t("nav-item2")}</span>
            </div>
            <Link to='/contact-us'>
              <button className='right-buttons-contact'>
                {t("contact-title")}
              </button>
            </Link>
          </div>
          <div className='right-cards'>
            {filteredCollection.map(
              (
                category: {
                  img: string | undefined;
                  name: any | string | string[];
                },
                ind: Key | null | undefined,
              ) => (
                <div
                  className='right-card'
                  key={ind}
                  onClick={() => handleClickProduct(category)}
                >
                  <div className='right-card-img'>
                    <img src={category.img} alt='' />
                  </div>
                  <span className='right-card-text'>
                    {t(category.name)}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCategory;
