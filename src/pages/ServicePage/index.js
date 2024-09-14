import React from "react";
import ServiceImg from "../../assets/images/service 1.jpg";

const ServicePage = () => {
  return (
    <>
      <div className="service-container">
        <div className="pq-service-box-2-list">
          <div className="item">
            <div className="pq-service-box pq-style-2">
              <div className="pq-service-number">01</div>
              <div className="pq-service-box-title">
                <h5 className="pq-service-title">
                  {" "}
                  Search Engine Optimization
                </h5>
              </div>
              <div className="pq-service-description">
                IT service providers may offer custom software development
                Planning and sketching Modern designtestlly practically point of
                view.
                <ul className="pq-service-list">
                  <li>Mobile &amp; Web Design</li>
                  <li>Interation Design</li>
                  <li>UX Research &amp; Plan</li>
                </ul>
              </div>
              <div className="pq-service-img">
                <img src={ServiceImg} decoding="async" alt="service-image" />
                {/* <img decoding="async" src="images/service/list/1.jpg" alt="service-image"> */}
              </div>
              <div className="pq-btn-container">
                <a
                  className="pq-button pq-button-flat"
                  href="software-development.html"
                >
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
