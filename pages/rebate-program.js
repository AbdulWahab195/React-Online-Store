import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <iframe frameBorder="0" src="https://www.rebatebus.com/westgate" style={{ minHeight: '900px', width: "100%" }}></iframe>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
