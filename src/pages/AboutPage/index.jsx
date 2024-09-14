import React from "react";
import aboutImg from "../../assets/images/aboutBg.jpg";
import arcImg from "../../assets/images/communication-svgrepo-com.svg";
import electricalImg from "../../assets/images/electric-warning-svgrepo-com.svg";
import mechanicalImg from "../../assets/images/engineering-svgrepo-com.svg";
import fireImg from "../../assets/images/smartphone-fire-alarm-svgrepo-com.svg";
import callImg from "../../assets/images/call-medicine-rounded-svgrepo-com.svg";
import emailImg from "../../assets/images/email-part-2-svgrepo-com.svg";
import { Col, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="about-us container">
      <Row>
        <Col md={6}>
          <div className="about-image">
            <img src={aboutImg} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <div className="about-us">
            <div className="about-title">
              <p>ABOUT COMPANY</p>
            </div>
            <div className="about-moto">
              <h1>Empowering businesses through engineering technology</h1>
            </div>
            <div className="about-description">
              <p>
                GoIGNIS is a team of skilled engineers based in India, providing
                top-quality MEP design and engineering services to US-based
                companies. Specializing in mechanical, electrical, fire alarm &
                protection, and ARC solutions, we ensure compliance with NFPA,
                FM, UL, and AHJ standards. Our cost-effective, innovative
                designs are delivered with precision and punctuality, allowing
                clients to focus on growth while we handle production. Let
                GoIGNIS enhance your productivity and profitability with expert
                remote design support.
              </p>
            </div>
            <div className="about-service">
              <Row>
                <Col md={6} className="mb-3">
                  <div className="about-fire-alarm">
                    <div className="about-service-head">
                      <div className="about-service-type">
                        <div className="about-service-type-image">
                          <img src={fireImg} alt="" />
                        </div>
                      </div>
                      <div className="about-service-type-head">
                        Fire Alarm & Protection
                      </div>
                    </div>
                    <div className="about-service-type-body">
                      We design fire alarm systems that comply with NFPA, FM,
                      and AHJ standards for optimal safety and compliance.
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="about-service-head">
                    <div className="about-service-type">
                      <div className="about-service-type-image">
                        <img src={arcImg} alt="" />
                      </div>
                    </div>
                    <div className="about-service-type-head">
                      <div className="about-arc-solution">ARC solutions</div>
                    </div>
                  </div>
                  <div className="about-service-type-body">
                    We provide designs that meet all architectural and
                    regulatory codes for smooth project approval
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="about-service-head">
                    <div className="about-service-type">
                      <div className="about-service-type-image">
                        <img src={mechanicalImg} alt="" />
                      </div>
                    </div>
                    <div className="about-service-type-head">
                      <div className="about-mechanical">Mechanical</div>
                    </div>
                  </div>
                  <div className="about-service-type-body">
                    We offer tailored HVAC and plumbing solutions to enhance
                    energy efficiency and system performance.
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="about-service-head">
                    <div className="about-service-type">
                      <div className="about-service-type-image">
                        <img src={electricalImg} alt="" />
                      </div>
                    </div>
                    <div className="about-service-type-head">
                      <div className="about-eletrical">Electrical</div>
                    </div>
                  </div>
                  <div className="about-service-type-body">
                    Our electrical services include power, lighting, and
                    low-voltage systems, ensuring efficiency and compliance
                  </div>
                </Col>
              </Row>
            </div>
            <hr className="my-1" />
            <div className="about-contact">
              <div className="about-number">
                <div className="about-number-image">
                  <img src={callImg} alt="" />
                </div>
                <div className="about-contact-number">+1(347)391-8844</div>
              </div>
              <div className="about-email">
                <div className="about-email-image">
                  <img src={emailImg} alt="" />
                </div>
                <div className="about-contact-email">info@goignis.com</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
