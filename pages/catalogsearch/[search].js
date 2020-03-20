import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import ProductsFilterOptions from '../../components/category-without-sidebar/ProductsFilterOptions';
import ProductsCard from '../../components/products/ProductsCardTwo';
import { searchProducts } from '../../store/actions/productActions';

class Index extends Component {

    state = {
        gridClass: 'products-col-four'
    }

    componentDidMount() {
        const { products, searchProducts, router: { query: { search } } } = this.props;
        if(products.length === 0) {
            searchProducts(search);
        }
    }

    handleGrid = (e) => {
        this.setState({
            gridClass: e
        });
    }
    
    render() {
        let { gridClass } = this.state;
        const { products, router: { query: { search } } } = this.props;

        return (
            <React.Fragment>
                <Navbar />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Search Results for '{search}'</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ProductsFilterOptions onClick={this.handleGrid} />

                                <div id="products-filter" className={`products-collections-listing row ${gridClass}`}>
                                    <ProductsCard products={products} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}

Index.getInitialProps = async ({ store, query: { search } }) => {
    await store.dispatch(searchProducts(search));
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchProducts: bindActionCreators(searchProducts, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
