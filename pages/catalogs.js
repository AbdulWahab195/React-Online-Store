import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Breadcrumb from '../components/Common/Breadcrumb';
import { getCatalogs } from '../store/actions/resourcesActions';
import { catalogsImageURL } from '../common/createImageURL';
class Index extends Component {
    componentDidMount() {
        const { catalogs, getCatalogs } = this.props;
        getCatalogs();
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <p className="col-md-12 catalogs-heading">Catalogs</p>
                        </div>
                        <div className="row">
                            {this.props.catalogs.map(catalog => {
                                return (
                                    <div className="col-md-3 catalogs-item">
                                        <img src={catalogsImageURL(catalog.catalogImage)} />
                                        <div className="catalogs-overlay">
                                            <h1>{catalog.catalogName}</h1>
                                            <div className="catalogs-overlay-content"><a href="#" data-toggle="modal" onClick={e => {
                                                e.preventDefault();
                                                window.open(catalogsImageURL(catalog.catalogDocumentLink), '_blank');
                                            }} data-target="#catalogs_1"><em className="fa fa-search"></em> View</a></div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </section>
                <Partner size={5} height={50} />
                <Footer />
            </React.Fragment>
        );
    }
}

Index.getInitialProps = async ({ store }) => {
    await store.dispatch(getCatalogs);
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
