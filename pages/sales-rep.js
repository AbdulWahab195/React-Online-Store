import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import { getSalesReps } from '../store/actions/resourcesActions';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import USAMap from "react-usa-map";
import './../assets/styles/app.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Index extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            salesRepsArray: [],
            salesRepObj: {
                repName: '',
                companyName: '',
                address: '',
                phone: '',
                state: '',
                stateCode: ''
            }
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        const { salesReps, getSalesReps } = this.props;
        getSalesReps();
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'rgb(41, 170, 29)';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    mapHandler = (event) => {
        const obj = this.props.salesReps.filter(x => x.stateCode === event.target.dataset.name);
        if (obj) {
            this.openModal();
            this.setState({ salesRepsArray: obj });
        }
    };
    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
        return {
            "NJ": {
                fill: "#29aa1d",
            },
            "NY": {
                fill: "#29aa1d"
            },
            "WA": {
                fill: "#29aa1d"
            },
            "ID": {
                fill: "#29aa1d"
            },
            "MT": {
                fill: "#29aa1d"
            },
            "OR": {
                fill: "#29aa1d"
            },
            "NV": {
                fill: "#29aa1d"
            },
            "CA": {
                fill: "#29aa1d"
            },
            "WY": {
                fill: "#29aa1d"
            },
            "UT": {
                fill: "#29aa1d"
            },
            "ND": {
                fill: "#29aa1d"
            },
            "MN": {
                fill: "#29aa1d"
            },
            "SD": {
                fill: "#29aa1d"
            },
            "AZ": {
                fill: "#29aa1d"
            },
            "MI": {
                fill: "#29aa1d"
            },
            "WI": {
                fill: "#29aa1d"
            },
            "IA": {
                fill: "#29aa1d"
            },
            "VT": {
                fill: "#29aa1d"
            },
            "NH": {
                fill: "#29aa1d"
            },
            "ME": {
                fill: "#29aa1d"
            },
            "MA": {
                fill: "#29aa1d"
            },
            "CT": {
                fill: "#29aa1d"
            },
            "RI": {
                fill: "#29aa1d"
            },
            "AK": {
                fill: "#29aa1d"
            },
            "HI": {
                fill: "#29aa1d"
            },
            "TX": {
                fill: "#29aa1d"
            },
            "GA": {
                fill: "#29aa1d"
            },
            "SC": {
                fill: "#29aa1d"
            },
            "FL": {
                fill: "#29aa1d"
            },
            "CO": {
                fill: "#29aa1d"
            },
            "NE": {
                fill: "#29aa1d"
            },
            "KS": {
                fill: "#29aa1d"
            },
            "NM": {
                fill: "#29aa1d"
            },
            "OK": {
                fill: "#29aa1d"
            },
            "LA": {
                fill: "#29aa1d"
            },
            "MS": {
                fill: "#29aa1d"
            },
            "AL": {
                fill: "#29aa1d"
            },
            "AR": {
                fill: "#29aa1d"
            },
            "TN": {
                fill: "#29aa1d"
            },
            "MO": {
                fill: "#29aa1d"
            },
            "IL": {
                fill: "#29aa1d"
            },
            "IN": {
                fill: "#29aa1d"
            },
            "OH": {
                fill: "#29aa1d"
            },
            "PA": {
                fill: "#29aa1d"
            },
            "KY": {
                fill: "#29aa1d"
            },
            "WV": {
                fill: "#29aa1d"
            },
            "VA": {
                fill: "#29aa1d"
            },
            "MD": {
                fill: "#29aa1d"
            },
            "NC": {
                fill: "#29aa1d"
            },
        };
    };
    render() {
        return (
            <Fragment>
                <Navbar />
                <Breadcrumb title="Sales Rep" />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Sale Rep Info</h2>
                    <button onClick={this.closeModal} className='close-button'>x</button>

                    {this.state.salesRepsArray.map(obj => {
                        return (
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name: </label>
                                    </div>
                                    <div className="col-md-6">
                                        {obj.repName}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Company Name:</label>
                                    </div>
                                    <div className="col-md-6">
                                        {obj.companyName}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Address:</label>
                                    </div>
                                    <div className="col-md-6">
                                        {obj.address}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone Number:</label>
                                    </div>
                                    <div className="col-md-6">
                                        {obj.phone}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>State:</label>
                                    </div>
                                    <div className="col-md-6">
                                        {obj.state}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>State Code:</label>
                                    </div>
                                    <div className="col-md-6">
                                        {obj.stateCode}
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        )
                    }
                    )}

                </Modal>
                <section className="contact-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Sales Rep</h2>
                        </div>
                        <div className="App">
                            <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
                        </div>
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }
}

Index.getInitialProps = async ({ store }) => {
    await store.dispatch(getSalesReps);
}

const mapStateToProps = (state) => {
    return {
        salesReps: state.salesRepsReducer.salesReps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSalesReps: bindActionCreators(getSalesReps, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));