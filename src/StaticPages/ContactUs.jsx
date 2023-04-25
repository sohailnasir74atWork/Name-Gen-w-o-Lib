import React, { useState } from "react";
import "../HomePage/Comment.css"
import facebook from "../../src/facebook.png"
import twitter from "../../src/twitter.png"
import insta from "../../src/insta.png"


const ContactUs = () => {

  const [Name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true)
  const { swal } = window

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name) {
      swal({
        icon: "error",
        title: "Ops! please insert name",
      });
      return
    }
    if (!email.match(isValidEmail)) {
      swal({
        icon: "error",
        title: "Ops! please insert valid email",
      });
      return
    }
    if (!message) {
      swal({
        icon: "error",
        title: "Ops! please insert comment",
      });
      return
    }
    setLoading(true)
    console.log(Name, email, message)
    fetch(`${process.env.REACT_APP_URL_SERVER}/contactus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, message, email })
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        swal({
          icon: "success",
          title: "Submitted Successfully",
        });
        setName('');
        setMessage('');
      })
      .catch((error) => {
        setLoading(false)
        console.error(error);
        swal({
          icon: "error",
          title: "Ops! some thing went wrong",
        });
      });
  };

  return (
    <div>
      <div className="background"></div>
      <div className="contact-us-cont">
        <div className="w-50-d section-left">
          <div>
            <div>
              <div>
                <h2>GET IN TOUCH</h2>
                <div>
                
                  <p>
                    Have a question or need more information about ThinkTech?
                    <br />
                    Contact us and our team will get back to you as soon as possible.
                  </p>
                  <ul>
                      <li>
                        <a href="mailto:support@stylish-names.com" target='_blank' className="list__flex">
                          <span>support@stylish-names.com</span>
                        </a>
                      </li></ul>
                  <div>
                  <p>You can also reach us through our social media accounts on Twitter, Facebook, and Instagram. Follow us to stay updated on our latest products, promotions, and news.</p>
                    <ul>
                                       
                      
                        <span className="social">
                          <a href="#" target='_blank'>
                          <img src={facebook} alt="facebook"/>

                          </a>
                          <a href="" target='_blank'
                            title="The ThinkTech on Twitter">
                              <img src={twitter} alt="twitter"/>
                          </a>
                                                   <a href="" target='_blank'
                            title="The ThinkTech on Instagram">
                          <img src={insta} alt="insta"/>

                          </a>
                        </span>
                     
                      {/* <li>
                        <a href=""  target='_blank' 
                        className="">
                        <AddLocation/><span>P/O Box 45832, Baton Rouge, LA 70895</span>
                        </a>
                    </li> */}
                    </ul>
                  </div>
                  <p className="sub-text">
                    Please allow us 1-2 business
                    days to carefully process your request. If you have a specific
                    question about your order, please don't forget to provide your order number.
                    This will help us to assist you more quickly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-50-d section-right">
          <div>
            <div className="heading">
              <h2>CONTACT US</h2>
            </div>
            <input
              required
              placeholder="Name"
              label="Name"
              className="spacer"
              value={Name}
              onChange={handleNameChange}
            />
            <input
              required
              label="Email"
              placeholder="Email"
              className="spacer"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
            placeholder="Message"
              label="Message"
              className="spacer-3"
              value={message}
              onChange={handleMessageChange}
            />
            <div>
              <button className="primary-button submit-button" variant="outlined" onClick={handleSubmit}>
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
