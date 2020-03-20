import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Container from '../components/Map/Container';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container />
                <Partner size={5} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
