import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2s8ihyb', 'template_2hixdgm', form.current, '0uvdl7fq873lBUkRT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact container section" id='contact'>
      <div className="tags top-tags">&lt;h2&gt;</div>
      <h2 className="section__title">Get in touch</h2>
      <div className="tags bottom-tags">&lt;/h2&gt;</div>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Love to hear from you! 👋</h3>
          <p className="contact__details">Don't like forms?, Send me an email. 📧</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" name="user_name" className="contact__form-input" placeholder="What's your name?" required/>
              </div>

              <div className="contact__form-div">
                <input type="email" name="user_email" className="contact__form-input" placeholder="What's your email?" required/>
              </div>
            </div>
            
            <div className="contact__form-div">
              <input type="text" name="subject" className="contact__form-input" placeholder="What do you want to talk about? 👀" required/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder="Wirte your message..." required></textarea>
            </div>

            <input type="submit" value="Send Message" className="btn"></input>
          </form>
      </div>
    </section>
  )
}

export default Contact