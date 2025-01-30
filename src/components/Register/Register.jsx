import React, { useRef } from 'react';
import './Register.style.css';
import paw from './../../assets/icon/paw-prints.svg';
import emailjs from 'emailjs-com';

const Register = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_klc58ri', 'template_iojs7ds', form.current, 'n6AxSVuehvQ8OUW9V')
    e.target.reset();
  };
    return ( 
        <div className='Register'>
            <img src={paw} alt="" className="register__bg-paw-1" />
            <img src={paw} alt="" className="register__bg-paw-2" />
            <p className="regoster__title">Get
                <span> 20% Off </span>
                on first Purchase
            </p>
            <form ref={form} className="register__form" onSubmit={sendEmail}>
                <input type="email" name='email' placeholder='Your Email Address' required className='register__form__item'/>
                <input type="text" name='name' placeholder='Your Full Name' required className='register__form__item'/>
                <textarea name="message" rows={1} placeholder='Message' required className='register__form__item'></textarea>
                <button type="submit" className='register__form__btn'>Send Message</button>
            </form>
        </div>
     );
}
 
export default Register;