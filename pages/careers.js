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
                            <h2>Open Positions</h2>
                        </div>
                        <p className="note-font mb-0">PLEASE CLICK ON THE POSITIONS AVAILABLE BELOW TO SEE MORE INFO:</p>
                        <div className="row">
                            <p>- No Positions Available</p>
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
