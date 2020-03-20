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
import Partner from '../../components/Common/Partner';
import { getProduct, emptyProduct } from '../../store/actions/productActions';

class Index extends Component {
    componentWillUnmount() {
        const { emptyProduct } = this.props;
        emptyProduct()
    }

    render() {
        const { childProduct } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title={childProduct.name} />

                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ProductImage product={childProduct} />
                            <ProductContent product={childProduct} />
                            <DetailsTab product={childProduct} />
                        </div>
                    </div>
                    <Partner size={5} height={50} />
                </section>
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
