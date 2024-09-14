import React from "react";
import { Row, Col } from "react-bootstrap";
import Arrow from "../../assets/images/arrow-1.jpg";
import Arrow2 from "../../assets/images/arrow-2.jpg";



const WorkingProcess = () => {
  return (
    <div className="working-container mt-5">
      <section className="process mb-5">
        <div className="container-fluid">
          <Row>
            <Col lg={12}>
              <div className="marquee-div">
                <h2 className="title-marquee">
                  Amazing IT solutions IT involves the physical components and
                  devices used for computing, data storage, and networking. This
                  includes computers, servers, routers, switches, storage devices,
                  and peripheral devices like printers and scanners.
                </h2>
              </div>
            </Col>
          </Row>
        </div>

        <div className="container">
          <Row>
            <Col xl={6}>
              <div className="sticky-top">
                <div className="section-title style-1 mb-45">
                  <span className="section-sub-title">
                    Our working process
                  </span>
                  <h5 className="section-main-title">
                    6 step working process for fast work
                  </h5>
                  <p className="section-description">
                    IT enables the collection, analysis, and interpretation of
                    data to gain insights and support decision-making processes.
                  </p>
                </div>
                <a className="button button-flat" href="our-process.html">
                  <span className="text">Get it now</span>
                </a>
              </div>
            </Col>

            <Col xl={6} className="mt-4 mt-xl-0 p-xl-0 d-flex z-3">
              <div className="process-box">
                <Row>
                  <Col xl={6} lg={6} md={6}>
                    <div className="process-step style-1 text-start">
                      <img
                        decoding="async"
                        className="before-img"
                        src={Arrow}
                        alt="image"
                      />
                      <div className="process-icon">
                        <span className="process-number">01</span>
                        <i className="flaticon-018-milestone"></i>
                      </div>
                      <div className="process-info">
                        <h5 className="process-title">Research</h5>
                      </div>
                    </div>
                  </Col>
                  
                  <Col xl={6} lg={6} md={6} className="text-center">
                    <div className="process-step style-1 text-end">
                      <div className="process-icon">
                        <span className="process-number">02</span>
                        <i className="flaticon-025-digital-marketing"></i>
                      </div>
                      <div className="process-info">
                        <h5 className="process-title">Discovery</h5>
                      </div>
                    </div>
                  </Col>

                  <Col xl={12} className="text-center">
                    <div className="arrow-2">
                      <img src={Arrow2} alt="" />
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6}>
                    <div className="process-step style-1 text-start">
                      <img
                        decoding="async"
                        className="before-img"
                        src={Arrow}
                        alt="image"
                      />
                      <div className="process-icon">
                        <span className="process-number">03</span>
                        <i className="flaticon-026-web-rating"></i>
                      </div>
                      <div className="process-info">
                        <h5 className="process-title">Content</h5>
                      </div>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} className="text-center">
                    <div className="process-step style-1 text-end">
                      <div className="process-icon">
                        <span className="process-number">04</span>
                        <i className="flaticon-034-web-optimization"></i>
                      </div>
                      <div className="process-info">
                        <h5 className="process-title">Design</h5>
                      </div>
                    </div>
                  </Col>

                  <Col xl={12} className="text-center">
                    <div className="arrow-2">
                      <img src={Arrow2} alt="" />
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6}>
                    <div className="process-step style-1 text-start">
                      <img
                        decoding="async"
                        className="before-img"
                        src={Arrow}
                        alt="image"
                      />
                      <div className="process-icon">
                        <span className="process-number">05</span>
                        <i className="flaticon-027-data-report"></i>
                      </div>
                      <div className="process-info">
                        <h5 className="process-title">Development</h5>
                      </div>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} className="text-center">
                    <div className="process-step style-1 text-end">
                      <div className="process-icon">
                        <span className="process-number">06</span>
                        <i className="flaticon-032-advertising"></i>
                      </div>
                      <div className="process-info">
                        <h5 className="process-title">Optimization</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default WorkingProcess;
