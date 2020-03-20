import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/shop-style-one/Banner";
import InstagramPhoto from "../components/Common/InstagramPhoto";
import News from "../components/Common/News";
import Facility from "../components/shop-style-one/Facility";
import Offers from "../components/Common/Offers";
import Subscribe from "../components/Common/Subscribe";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layout/Footer";

class Index extends Component {
  render() {
    const { categoriesTree } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <InstagramPhoto />
        <Facility />
        <News list={categoriesTree[0].children} />
        <Offers />
        <Subscribe />
        <Partner size={5} height={50} />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoriesTree: state.categoryReducer.categoriesTree
  };
};

export default connect(mapStateToProps)(Index);
