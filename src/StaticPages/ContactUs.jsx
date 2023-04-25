import React, { useState } from "react";
import "../HomePage/Comment.css"

// const BackGround = styled(Box)({
//     background: "var(--background-color)",
//     height:"120px",
//     width:"100%",
//     "@media (max-width: 576px)": { 
//         height: "60px" 
// },
// })

// const SectionWrapper = styled(Card)({
//   display: "flex",
//   justifyContent: "center",
//   height: "100%",
//   width: "80%",
//   margin: "100px auto",
//   background:"var(--color-three)",
//   boxShadow: 'none',
//   "@media (max-width: 768px)": {
//     flexDirection:"column",
//     margin: '1em',
//     width: "90%",
//   }
// });
// const SubSection = styled(Box)({
//   width: "50%",
//   display: "flex",
//   "@media (max-width: 768px)": {
//     width:"100%"
//   }
// });

// const LeftSection = styled(Box)({
//     background:"lightblue",
//     width: "100%",
//   padding:"20px",
//   "@media (max-width: 768px)": {
//     padding: '1em 0.7em'
//   },
//   "& .heading":{
//     display:"flex",
//     fontFamily:"var(--text-font)",
//     justifyContent:"center",
//     padding:"10px 0px",
//     flexDirection:"column",
//     width:"100%"
//   },
//   "& .sub-text":{
//     fontFamily:"var(--text-font)",
//     color:"var(--primary-color)",
//     textAlign:"left",
//     margin: '25px 0px 15px 0px',
//     fontFamily:"var(--text-font)",

//   },
//   "& li":{
//     padding:"3px 0px",
//     marginBottom: '10px',
//   },
//   "& .social-media":{
//     display:"flex",
//     alignItems:"center",
//     "& svg":{
//       fill: 'var(--primary-color)'
//     },
//     "& .list__flex":{
//       display:"flex",
//       alignItems:"center",
//       gap: '0.5em',
//       "&.address-link":{
//         alignItems: 'start'
//       },
//       "&.social--links":{
//         gap: '0.5em'
//       }
//     },
//   },
//   "& .mr-0":{
//     margin:"0px"
//   },
// });

// const RightSection = styled(Box)({
//     fontFamily:"var(--text-font)",
//   width: "100%",
//   padding:"20px",
//   "@media (max-width: 768px)": {
//     padding: '1em 0.7em'
//   },
//   "& .spacer":{
//     width:"90%",
//     padding:"0px 0px",
//     display:"flex",
//     textAlign:"start",
//     margin:"20px auto",
//     justifyContent:"start"
//   },
//   "& .submit-button": {
//     height: "60px",
//     fontFamily: "var(--text-font)",
//     color: "white",
//     fontWeight: "900",
//     background: "var(--color-two)",
//     display: "flex",
//     position: "relative",
//     justifyContent: "center",
//     borderRadius: "0px",

//     alignItems: "center",
//     width: "15rem",
//     margin: "0px auto",
//     "&:hover": {
//         background: "var(--color-one)",
//         color: "black"

//     }, "@media (max-width: 576px)": {
//         height: "40px",
//         "&:hover": {
//             background: "var(--color-two)",
//             color: "var(--color-three)",
//         },
//         "&:active": {
//             background: "var(--color-one)",
//             color: "white",
//         }

//     },
// },
//   "& .heading":{
//     display:"flex",
//     justifyContent:"center",
//     marginLeft:"-30px",
//     padding:"10px 0px"
//   },
//   "& .mr-0":{
//     margin:"0px"
//   },
//   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     borderColor: "var(--secondary-color)",
// },
// "& .MuiInputLabel-outlined.Mui-focused":{
//     color:"var(--secondary-color)"
// }
// });

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
                  <div>
                    <ul>
                      <li>
                        <a href="mailto:support@stylish-names.com" target='_blank' className="list__flex">
                          <span>support@stylish-names.com</span>
                        </a>
                      </li>
                      <li>
                        <span className="list__flex social--links">
                          <a href="#" target='_blank'>
                          </a>
                          <a href="" target='_blank'
                            title="The ThinkTech on Twitter">
                          </a>
                          <a href="#" target='_blank'>
                          </a>
                          <a href="" target='_blank'
                            title="The ThinkTech on Instagram">
                          </a>
                        </span>
                      </li>
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
