import React from "react";
import facbeookImg from "../../assets/images/facebook-svgrepo-com.svg";
import twitterImg from "../../assets/images/twitter-154-svgrepo-com.svg";
import instagramImg from "../../assets/images/instagram-svgrepo-com.svg";
import { Col, Row } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <Row>
            <Col lg={6} className="d-flex flex-column justify-content-center">
              <div className="contact-heading contact-head-style-1">
                <span className="contact-section-sub-title">
                  have a idea for your buisness
                </span>
                <h5 className="contact-section-main-title">
                  let's make your brand most brilliant
                </h5>
                <p className="contact-section-description">
                  IT enables the collection, analysis, and interpretation of
                  data to gain insights and support decision-making processes.
                </p>
              </div>
              <h4 className="contact-my-30 contact-phone-number">+ (024) 7852 3587</h4>
              <ul className="contact-social-list">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook">
                      <img src={facbeookImg} />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook">
                      <img src={instagramImg} />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook">
                      <img src={twitterImg} />
                    </i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="contact-form-div">
                <h3 className="contact-form-title">Send Us A Message</h3>
                <p className="contact-form-description">
                  Feel Some love to see loremwhat we can do it.
                </p>
                <form className="contact-applyform contact-mt-20">
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="col-lg-12">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Cell Phone" />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Subject" />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        id="message"
                        cols="40"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <a href="#" className="contact-button contact-button-flat">
                        send message
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
