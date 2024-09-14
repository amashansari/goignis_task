import React from "react";
import ServiceImg from "../../assets/images/service 1.jpg";

const ServicePage = () => {
  return (
    <>
      <div className="service-page-container">
        <div class="service-title style-1 text-center">
          <span class="service-sub-title">Our services</span>
          <h5 class="service-main-title">
            We Help You Grow Your Business Expntially
          </h5>
        </div>
        <div className="service-box-list">
          <div className="item">
            <div className="service-box style-2">
              <div className="service-number">01</div>
              <div className="service-box-title">
                <h5 className="service-title"> FIRE ALARM ENGINEERING</h5>
              </div>
              <div className="service-description">
                At GoIGNIS, we understand the critical role that a well-designed
                fire alarm system plays in protecting life and property....
                <ul className="service-list">
                  <li>Full Coverage Design</li>
                  <li>Quick Detection & Alert</li>
                  <li>Custom Systems</li>
                </ul>
              </div>
              <div className="service-img">
                <img src={ServiceImg} decoding="async" alt="service-image" />
                {/* <img decoding="async" src="images/service/list/1.jpg" alt="service-image"> */}
              </div>
              <div className="btn-container">
                <a className="button button-flat">
                  <span className="text">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="service-box-list">
          <div className="item">
            <div className="service-box style-2">
              <div className="service-number">02</div>
              <div className="service-box-title">
                <h5 className="service-title"> FIRE SPRINKLER ENGINEERING</h5>
              </div>
              <div className="service-description">
                Our Fire Sprinkler Engineering team offers comprehensive design
                services that comply with NFPA standards and relevant codes.
                Using advanced software such as ......
                <ul className="service-list">
                  <li>NFPA Compliance</li>
                  <li>Advanced Software</li>
                  <li>BIM Integration</li>
                </ul>
              </div>
              <div className="service-img">
                <img src={ServiceImg} decoding="async" alt="service-image" />
                {/* <img decoding="async" src="images/service/list/1.jpg" alt="service-image"> */}
              </div>
              <div className="btn-container">
                <a className="button button-flat">
                  <span className="text">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="service-box-list">
          <div className="item">
            <div className="service-box style-2">
              <div className="service-number">03</div>
              <div className="service-box-title">
                <h5 className="service-title"> ELECTRICAL ENGINEERING</h5>
              </div>
              <div className="service-description">
                Our electrical engineering team at GoIGNIS understands the
                ever-increasing complexity and functionality of building
                systems,......
                <ul className="service-list">
                  <li>Quality Designs</li>
                  <li>Expert Integration</li>
                  <li>BIM Modeling</li>
                </ul>
              </div>
              <div className="service-img">
                <img src={ServiceImg} decoding="async" alt="service-image" />
                {/* <img decoding="async" src="images/service/list/1.jpg" alt="service-image"> */}
              </div>
              <div className="btn-container">
                <a className="button button-flat">
                  <span className="text">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="service-box-list">
          <div className="item">
            <div className="service-box style-2">
              <div className="service-number">04</div>
              <div className="service-box-title">
                <h5 className="service-title"> HVAC ENGINEERING</h5>
              </div>
              <div className="service-description">
                At GoIGNIS, we understand that heating, ventilation, and air
                conditioning (HVAC) are crucial components in any building. We
                have a team of....
                <ul className="service-list">
                  <li>Custom Design</li>
                  <li>System Expertise</li>
                  <li>Code Compliance</li>
                </ul>
              </div>
              <div className="service-img">
                <img src={ServiceImg} decoding="async" alt="service-image" />
                {/* <img decoding="async" src="images/service/list/1.jpg" alt="service-image"> */}
              </div>
              <div className="btn-container">
                <a className="button button-flat">
                  <span className="text">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="service-box-list">
          <div className="item">
            <div className="service-box style-2">
              <div className="service-number">05</div>
              <div className="service-box-title">
                <h5 className="service-title"> ARCS ENGINEERING</h5>
              </div>
              <div className="service-description">
                At GoIGNIS, we understand the importance of Auxiliary Radio
                Communication Systems (ARCS) in high-rise buildings.............
                <ul className="service-list">
                  <li>Custom Design</li>
                  <li>Continuous Operation</li>
                  <li>Enhanced Communication</li>
                </ul>
              </div>
              <div className="service-img">
                <img src={ServiceImg} decoding="async" alt="service-image" />
                {/* <img decoding="async" src="images/service/list/1.jpg" alt="service-image"> */}
              </div>
              <div className="btn-container">
                <a className="button button-flat">
                  <span className="text">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
