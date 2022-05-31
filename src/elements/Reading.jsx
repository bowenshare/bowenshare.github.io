import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "./common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiMail, FiCopy } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const MathCompetitionList = [
    {
        icon: <img src="/assets/images/service/math-kangaroo.png" alt="Math Kangaroo" />,
        title: 'Math Kangaroo',
        description: 'Math Kangaroo is an international mathematics competition in over 77 countries. There are six levels of participation, ranging from grade 1 to grade 12.'
    },
    // {
    //     icon: <FiLayers />,
    //     title: 'Website Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    // {
    //     icon: <FiUsers />,
    //     title: 'Marketing & Reporting',
    //     description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.'
    // },
    // {
    //     icon: <FiMonitor />,
    //     title: 'Mobile Development',
    //     description: 'Desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    // },
    // {
    //     icon: <FiMail />,
    //     title: 'Email Marketing',
    //     description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.'
    // },
    // {
    //     icon: <FiCopy />,
    //     title: 'Copywriting',
    //     description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for.'
    // },
]

const MathLearningList = [
    {
        icon: <FiCast />,
        title: 'Beast Acedemy',
        description: 'Beast Academy is a full math program from Art of Problem Solving for kids ages 6 ~ 13, is also loosely based on the Common Core standards.'
    },
]


class Reading extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Reading' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Reading'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">My Reading</span>
                                    <h2>Math Competitions</h2>
                                    <p>I love math and enjoy all kind of math activties.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-main-wrapper">
                            {MathCompetitionList.map( (val , i) => (
                                // <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" key={i}>
                                    <a className="text-center" href="/math-competition-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <span className="subtitle">My Reading</span>
                                    <h2>Math Activities</h2>
                                    <p>I love math and enjoy all kind of math activties.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-main-wrapper">
                            {MathLearningList.map( (val , i) => (
                                // <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" key={i}>
                                    <a className="text-center" href="">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

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
export default Reading;