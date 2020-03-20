import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <h1 className="text-center my-5">Light-Design-Layout-Request</h1>
                    <h4 className="text-center my-3">Coming Soon</h4>
                </div>
                <Partner size={5} height={50} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
