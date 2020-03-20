import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Breadcrumb from '../components/Common/Breadcrumb';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                    <div className="section-title">
                                <h2>About WESTGATE</h2>
                            </div>
                            <p className="text-center mb-0">Westgate products are designed to be intuitively simple</p>
                            <p className="text-center mb-5">while leveraging the most forward-thinking lighting technology.</p>

                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="about-content">
                                    <h2>About Westgate</h2>
                                    <p>When you choose a manufacturer to fulfill your electrical and lighting needs, you generally make your decision based on quality, price and service. Our vision at Westgate Manufacturing is to provide the best quality product at the most competitive price, delivered with the most professional service in the industry.</p>
                                    <p>Westgate Manufacturing offers 16 distinct lines of electrical and lighting products that deliver the highest level of quality and performance in the industry. We ship all orders received by noon that same day from our central warehouse facility located in the City of Vernon (Los Angeles) and all of our products are backed by our Westgate warranty. From weatherproof junction boxes to state-of-the-art LED lighting fixtures, we are sure you will be satisfied with our Westgate quality, price and service.</p>                      
                                    <p>In just seven short years, Westgate has grown from a fledgling manufacturer to an industry leader in the development and production of cutting-edge electrical and lighting products. We are confident that you will find the quality and selection of our products among the best in the business.</p>
                                    <p>Please let the professional staff at Westgate Manufacturing provide you with the best quality products and services available. We are dedicated to improving your profitability and service levels, while reducing shipper errors, defectives and back orders. Please give us the opportunity to serve you.</p>
                                    <p>Move up to Westgate Manufacturing.</p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="about-content about-content-right">
                                    <div className="mb-4 ml-4">
                                        <img className="advantage" src={require("../images/about/advantage.jpg")} alt="image" />
                                    </div>
                                    <h5>PRODUCT RELIABILITY</h5>
                                    <p>Our products are sourced from factories that build value in their products and services. WESTGATE supply chain management specialists and engineering teams forge relationships with our vendor partners to provide high-caliber, sellable products that meet total customer satisfaction. WESTGATE  is dedicated to quality, accuracy and fine craftmanship at each and every point of production. We strive for perfection, set the standards and take an extra step in each production to provide quality that is definitely world-class.</p>
                                    <h5>PROFIT</h5>
                                    <p>Profit is the critical lifeblood of every business enterprise. Understanding our customers’ requirements and disciplined distribution practices, we ensure that all of our business partners have exceptional profit opportunities. WESTGATE builds long term and mutually beneficial relationship with its customers by repaying their trust and investment with continuous earnings and growth in their business.</p>
                                    <h5>CONVENIENCE</h5>
                                    <p>WESTGATE is the one-stop shop for electrical and lighting requirements. We supply the needs and meet the demands of the market and our clientele with products at competitive prices. We choose convenience without compromising quality so our customers get maximum benefits. Product availability, on-time delivery, order tracking, no minimum order requirement, low freight policies, integral sales people and responsive sales managers are all hallmarks of the WESTGATE business experience.</p>
                                    <h5>CUSTOMER CARE</h5>
                                    <p>Customer satisfaction is our goal. We work with our customers in a close relationship to understand their requirements and to provide them with the personal attention and care that their businesses need. WESTGATE empowers its core group to provide excellent service exceeding far beyond your expectations.</p>
                                    <h5>INTEGRITY</h5>
                                    <p>WESTGATE endeavors to build a business environment that values integrity and passion for excellence. We take pride in our brands and the quality of our service. Our confidence and our success reflect the quality of our products and integrity of our work.</p>
                                    <p>Doing business with WESTGATE can be one of the most rewarding partnerships in your business. Take the next step with us and open the gate of opportunities to your perfect business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Partner size={5} height={50} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
