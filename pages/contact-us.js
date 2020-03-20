import React, { Component, Fragment } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Map from '../components/Map';
import Partner from '../components/Common/Partner';

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Breadcrumb title="Contact Us" />
                <section className="contact-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contact Us</h2>
                        </div>
                        <h5 className="text-left mb-5">OUR DEPARTMENTAL DETAILS</h5>                        
                        <Map />
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info">
                                    <h3>CONTACT DETAILS</h3>
                                    <ul className="contact-list">
                                        <li><i className="fas fa-map-marker-alt"></i> Location: Westgate, 2462 E. 28th St., Vernon, CA 90058</li>
                                    </ul>

                                    <h3>PHONES:</h3>
                                    <ul className="contact-list">
                                        <li><i className="fas fa-phone"></i> Call Us: <a href="tel:+18778052252">+1 877-805-2252</a></li>
                                        <li><i className="fas fa-fax"></i> Fax: <a href="tel:+18778092252">+1 877-809-2252</a></li>
                                    </ul>

                                    <h3>E-MAIL:</h3>
                                    <ul className="contact-list">
                                        <li><i className="far fa-envelope"></i> Email Us: <a href="mailto:support@comero.com">support@comero.com</a></li>
                                    </ul>
            
                                    {/* <h3>Opening Hours:</h3>
                                    <ul className="opening-hours">
                                        <li><span>Monday:</span> 8AM - 6AM</li>
                                        <li><span>Tuesday:</span> 8AM - 6AM</li>
                                        <li><span>Wednesday:</span> 8AM - 6AM</li>
                                        <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
                                        <li><span>Sunday:</span> Closed</li>
                                    </ul>

                                    <h3>Follow Us:</h3>
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-skype"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="contact-form">
                                    <h3>CONTACT INFORMATION</h3>
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group">
                                                    <label>Name <span>(required)*</span></label>
                                                    <input type="text" name="name" id="name" className="form-control" required={true} data-error="Please enter your name" placeholder="Enter your name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group">
                                                    <label>Email <span>(required)*</span></label>
                                                    <input type="email" name="email" id="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Enter your Email Address" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4">
                                                <div className="form-group">
                                                    <label>Phone Number <span>(required)*</span></label>
                                                    <input type="text" name="phone_number" id="phone_number" className="form-control" required={true} data-error="Please enter your phone number" placeholder="Enter your Phone Number" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Your Message <span>(required)*</span></label>
                                                    <textarea name="message" id="message" cols="30" rows="8" required={true} data-error="Please enter your message" className="form-control" placeholder="Enter your Message" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4">
                                                <button type="submit" className="btn btn-primary mb-3 submit-btn-color">Send Message</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="col-lg-8 col-md-8">
                                                <button type="reset" className="btn btn-primary submit-btn-color">Reset</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer-partner">
                    <Partner size={5} />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Index;