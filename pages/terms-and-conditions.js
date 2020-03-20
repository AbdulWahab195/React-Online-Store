import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import TermsAndConditions from '../components/terms-and-conditions/TermsAndConditions';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <TermsAndConditions />
                <Partner size={5} height={50} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;
