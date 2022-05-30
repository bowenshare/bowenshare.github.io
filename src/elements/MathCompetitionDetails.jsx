import React, { Component } from "react";
import {FiCheck } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


class ServiceDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                
                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Math Competition Details' />
                {/* End Pagehelmet  */}

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--4"  data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
                                    {/* <h2 className="title theme-gradient">Math Kangaroo</h2>
                                    <p>Ranging from grade 1 to grade 12</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row row--35 sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/math-kangaroo-2021-level-1.png" alt="Service Images"/>
                                                    {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} /> */}
                                                    {/* <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle">Math Kangaroo 2021</span>
                                                        <h2 className="title">Grade Level 1</h2>
                                                        <p className="description">This is my first time for attending math kangaroo, let's rock it.</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Apr 25 - Apr 29, 2021</li>
                                                        <li>Score: 85</li>
                                                        <li>National Rank: 10</li>
                                                        <li>State Rank: 10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row row--35 sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="details">
                                                    <div className="section-title">
                                                        <span className="subtitle">Math Kangaroo 2022</span>
                                                        <h2 className="title">Grade Level 2</h2>
                                                        <p className="description">Keep learning, enjoying learning.</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Mar 17 - Mar 28, 2022</li>
                                                        <li>Score: 96</li>
                                                        <li>National Rank: 1</li>
                                                        <li>State Rank: 1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 mt_md--30 mt_sm--30">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/math-kangaroo-2022-level-2.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                                {/* Start Page Wrapper */}
                                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row row--35 sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/math-kangaroo-2022-level-4.png" alt="Service Images"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <div className="section-title">
                                                        <span className="subtitle">Math Kangaroo 2022</span>
                                                        <h2 className="title">Grade Level 4</h2>
                                                        <p className="description">Keep learning, enjoying learning.</p>
                                                    </div>
                                                    <ul className="liststyle mt--30">
                                                        <li>Mar 17 - Mar 28, 2022</li>
                                                        <li>Score: 96</li>
                                                        <li>National Rank: 1</li>
                                                        <li>State Rank: 1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />

            </React.Fragment>
        )
    }
}
export default ServiceDetails;