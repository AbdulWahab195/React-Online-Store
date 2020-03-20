import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import ChildPane from '../../components/product-details/ChildPane';
import Partner from '../../components/Common/Partner';
import { getProduct, emptyProduct } from '../../store/actions/productActions';

class Index extends Component {
    state = {
        open: false
    }

    componentDidMount() {
      const { parentProduct, getProduct, router: { query: { productID } } } = this.props;
      if(!parentProduct.productID) {
        getProduct(productID);
      }
    }

    componentWillUnmount() {
      const { emptyProduct } = this.props;
      emptyProduct()
    }

    handleChildModal = async (id) => {
        const { open } = this.state;
        const { getProduct } = this.props;
        if(open) {
            this.setState({ open: false })
        } else {
            await getProduct(id);
            this.setState({ open: true });
        }
    }

    render() {
        const { parentProduct, childProduct } = this.props;
        const flashtype = parentProduct.productAttributes.find(e => e.attributeID === 140) || '';
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={parentProduct.name} />

                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ProductImage product={parentProduct} />
                            <ProductContent product={parentProduct} />
                            <DetailsTab product={parentProduct} handleChildModal={this.handleChildModal} />
                        </div>
                    </div>
                    <Partner size={5} height={50} />
                </section>
                <ChildPane
                    open={this.state.open}
                    flashtype={flashtype ? flashtype.value : ''}
                    product={childProduct}
                    handleChildModal={this.handleChildModal}
                />
                <Footer />
            </React.Fragment>
        );
    }
}

Index.getInitialProps = async ({ store, query: { productID } }) => {
    await store.dispatch(getProduct(productID));
}

const mapStateToProps = (state) => {
    return {
        parentProduct: state.productReducer.parentProduct,
        childProduct: state.productReducer.childProduct,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: bindActionCreators(getProduct, dispatch),
        emptyProduct: bindActionCreators(emptyProduct, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
