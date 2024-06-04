import { SetStateAction, useState } from "react";
import "./Footer.css";
import FooterLogo from "../../images/logo.png";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleEmail = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const sendTelegramBot = () => {
    const tg_bot_id =
      "6419502770:AAFqnnlYZUoPB_uzBfy8rk4-MjUqMgU5dQQ";
    const chat_id = 5716140595;
    const messageBot = `Email: ${email}`;

    fetch(`https://api.telegram.org/bot${tg_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageBot,
      }),
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendTelegramBot();
    setEmail("");
    toast.success("ok");
  };

  return (
    <>
    <ToastContainer/>
      <div className='footer-container'>
        <div className='footer-cards'>
          <div className='footer-card'>
            <a href='/' className='footer-logo'>
              <img
                src={FooterLogo}
                alt='Footer Logo'
                className='logo'
              />
            </a>
            <span className='footer-card-text'>
              {t("footer-section1-text1")}
            </span>
          </div>
          <div className='footer-card card2'>
            <span className='card-title'>
              {t("footer-section1-title1")}
            </span>
            <div className='footer-nav-items'>
              <a href='/' className='card-item'>
                {t("nav-item1")}
              </a>
              <a href='/about-us' className='card-item'>
                {t("nav-item3")}
              </a>
              <a href='/shop' className='card-item'>
                {t("nav-item2")}
              </a>
              <a href='/contact-us' className='card-item'>
                {t("nav-item4")}
              </a>
            </div>
          </div>
          <div className='footer-card card3'>
            <span className='card-title'>
              {t("footer-section1-title2")}
            </span>
            <span className='card-contact-item'>
              Bukhara, st. Amir Temur 80.
            </span>
            <span className='card-contact-item'>Bnpuz@bk.ru</span>
            <span className='card-contact-item'>bnp_fabrik</span>
            <span className='card-contact-item'>
              info@bnpfabric.com
            </span>
            <a href='tel:+998903646903'>+998903646903</a>
            <a href='tel:+998903646903'>+998903646903</a>
          </div>
          <div className='footer-card footer-contact'>
            <span className='card-title'>
              {t("footer-section1-title3")}
            </span>
            <div className='footer-email-btn'>
              <input
                type='email'
                value={email}
                onChange={handleEmail}
                placeholder={t("footer-section-input-placeholder")}
              />
              <button
                type='submit'
                className='footer-btn'
                onClick={handleSubmit}
              >
                {t("footer-section-button")}
              </button>
            </div>
          </div>
        </div>
        <div className='footer-texts'>
          <span className='footer-text'>
            &copy;{new Date().getFullYear()}LLC"BUKHARA NATURAL
            PRODUCT". {t("footer-section2-text")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
