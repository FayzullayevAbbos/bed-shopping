/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, SetStateAction, useState } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { FaTelegram } from "react-icons/fa";
import Footer from "../Footer/Footer";
// import {ToastContainer, toast} from "react-toastify"

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const handleEmail = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPhoneNumber(e.target.value);
  };
  // const handleMessage = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setMessage(e.target.value);
  // };

  const sendTelegramBot = () => {
    // const tg_bot_id = "6419502770:AAFqnnlYZUoPB_uzBfy8rk4-MjUqMgU5dQQ";
    // const chat_id = 5716140595;
    // const messageBot = `Email: ${email} \n Phone number: ${phoneNumber} \n Message: ${message}`;
    // fetch(`https://api.telegram.org/bot${tg_bot_id}/sendMessage`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "cache-control": "no-cache",
    //   },
    //   body: JSON.stringify({
    //     chat_id: chat_id,
    //     text: messageBot,
    //   }),
    // });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendTelegramBot();
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    toast.success(t("toast-success"), {
      position: "top-right",
      autoClose: 2000,
    });
  };

  function handleMessage(_event: ChangeEvent<HTMLTextAreaElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <ToastContainer />
      <div className='containers'>
        
        <Navbar />
      </div>
      <div className='contact-container'>
        <div className='container'>
          <div className='contact-form'>
            <form
              action=''
              onSubmit={handleSubmit}
              className='form-items'
            >
              <h1 className='form-title'>{t("contact-title")}</h1>
              <input
                type='email'
                placeholder={t("contact-input1-placeholder")}
                value={email}
                onChange={handleEmail}
                className='form-input'
              />
              <input
                type='text'
                placeholder={t("contact-input2-placeholder")}
                value={phoneNumber}
                onChange={handlePhoneNumber}
                className='form-input'
              />
              <textarea
              name=""
              id=""
              cols={30}
              value={message}
              onChange={handleMessage}
              rows={10}
              className="form-textarea"
              placeholder={t("contact-area-placeholder")}
            ></textarea>
              <div className='sub-btns'>
                <button className='sub-btn'>
                  {t("contact-button")}
                </button>
              </div>
            </form>
            <div className='iframe-container'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194507.4996373258!2d71.04977211666704!3d40.38271012008775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb0014e0b9a75d%3A0xabd83e600fb1ccfd!2z0KDQuNGI0YLQsNC90YHQutC40Lkg0YDQsNC50L7QvSwg0KTQtdGA0LPQsNC90YHQutCw0Y8g0J7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1712052451233!5m2!1sru!2s'
                loading='lazy'
                title='My Location'
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className='contact-cards'>
            <div className='contact-card'>
              <MdOutlineMail className='contact-icon' />
              <span className='contact-text'>
                <b>{t("Contact-card-text1")}:</b> info@bnpfabric.uz
              </span>
            </div>
            <div className='contact-card'>
              <MdOutlinePhoneInTalk className='contact-icon' />
              <div className='contact-texts'>
                <span className='contact-text'>
                  <b>{t("Contact-card-text2")}:</b>+998903646903
                </span>
                <span className='contact-text'>+998903646903</span>
              </div>
            </div>
            <div className='contact-card'>
              <CiLocationOn className='contact-icon' />
              <span className='contact-text'>
                <b>{t("Contact-card-text3")}:</b>Bukhara qarakol
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
