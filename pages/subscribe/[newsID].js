import React, { Component } from "react";
import { withRouter } from "next/router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Partner from "../../components/Common/Partner";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { getNewsById } from "./../../store/actions/resourcesActions";

class Index extends Component {
  constructor() {
    super();

    this.state = { description: "newsObj.description" };
  }

  componentDidMount() {
    const {
      getNewsById,
      router: {
        query: { newsID }
      }
    } = this.props;
    getNewsById(newsID);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <section className="about-area ptb-60">
          <div className="container">
            <div className="section-title">
              <h2>News Detail</h2>
            </div>
            <p className="note-font mb-0">
              {" "}
              {this.props.newsByID.description}{" "}
            </p>
          </div>
        </section>
        <Partner size={5} height={50} />
        <Footer />
      </React.Fragment>
    );
  }
}

Index.getInitialProps = async ({ store, query: { newsID } }) => {
  await store.dispatch(getNewsById(newsID));
};

const mapStateToProps = state => {
  return {
    newsByID: state.newsReducer.newsByID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsById: bindActionCreators(getNewsById, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
