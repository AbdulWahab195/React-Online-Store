import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Terms from '../components/warranty/Terms';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Terms />
                <Partner size={5} height={50} />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Index;
