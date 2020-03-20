import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Partner from "../components/Common/Partner";
import ReturnPolicy from "../components/return-policy/ReturnPolicy";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ReturnPolicy />
        <Partner size={5} height={50} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
