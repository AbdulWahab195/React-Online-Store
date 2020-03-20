import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Breadcrumb from '../components/Common/Breadcrumb';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="404 Not Found" />
                <section className="error-area ptb-60">
                    <div className="container">
                        <div className="error-content">
                            <img src={require("../images/404.png")} alt="error" />

                            <h3>{this.props.statusCode} Page Not Found</h3>
                            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                            <Link href="/">
                                <a className="btn btn-light">Go to Home</a>
                            </Link>
                        </div>
                    </div>
                </section>
                <Partner size={5} height={50} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Error;
