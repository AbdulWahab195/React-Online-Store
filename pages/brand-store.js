import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Breadcrumb from '../components/Common/Breadcrumb';
import { getCatalogs } from '../store/actions/resourcesActions';
class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>The Brand Store</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/a.png" />
                            </div>
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/b.png" />
                            </div>
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/c.jpg" />
                            </div>
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/d.jpg" />
                            </div>
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/e.jpg" />
                            </div>
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/f.jpg" />
                            </div>
                            <div className="col-md-4 catalogs-item">
                                <img src="./../images/g.png" />
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

const mapStateToProps = (state) => {
    return {
        catalogs: state.catalogsReducer.catalogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCatalogs: bindActionCreators(getCatalogs, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
