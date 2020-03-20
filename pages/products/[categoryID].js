import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';
import ProductsFilterOptions from '../../components/category-without-sidebar/ProductsFilterOptions';
import ProductsCard from '../../components/products/ProductsCardTwo';
import { getByCategory } from '../../store/actions/productActions';
import { getAttributes } from '../../store/actions/attributesActions';

class Index extends Component {

    state = {
        gridClass: 'products-col-four',
        selectedFilters: [],
        products: [],
        originalProducts: []
    }

    componentDidMount() {
        let filterAttributes = [];
        this.props.attributes.map(data => data.variations.map(v => filterAttributes.push(v)));
        this.setState({filterAttributes, products: this.props.attributes, originalProducts: this.props.attributes});
    }

    handleGrid = (e) => {
        this.setState({
            gridClass: e
        });
    }

    filterProductsArr = async (arr) => {
        const {originalProducts} = this.state;

        let filterProducts = [];

        if(arr.length === 0) {
            this.setState({ products: originalProducts });
        } else {
            await arr.map(v1 => {
                originalProducts.map(v2 => {
                    v2.variations.map(v3 => {
                        v1 === v3.value && filterProducts.push(v2);
                    })
                });
            });

            let nowFilterProducts = await filterProducts.filter((attr, index, self) =>
                index === self.findIndex((t) => (
                    t.productID === attr.productID
                ))
            );
    
            this.setState({ products: nowFilterProducts });
        }        
    }

    onSelectFilter = (value) => {
        const { originalProducts } = this.state;        
        
        if(!this.state.selectedFilters.includes(value)) {
            this.setState({ selectedFilters: [...this.state.selectedFilters, value] }, () => {
                if(originalProducts && originalProducts.length > 0) {
                    this.filterProductsArr(this.state.selectedFilters);
                }
            });
        } else {
            const index = this.state.selectedFilters.indexOf(value);
            this.state.selectedFilters.splice(index, 1);
            
            this.setState({selectedFilters: this.state.selectedFilters}, () => {
                if(originalProducts && originalProducts.length > 0) {
                    this.filterProductsArr(this.state.selectedFilters);
                } 
            });                       
        }
    }

    runOnOpenFilter = () => {
        const { originalProducts } = this.state;

        this.setState({ products: originalProducts, selectedFilters: [] });
    }
    
    render() {
        let { gridClass, filterAttributes, products, selectedFilters } = this.state;

        return (
            <React.Fragment>
                <Navbar />

                <section className="products-collections-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Products</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ProductsFilterOptions 
                                    onClick={this.handleGrid} 
                                    attributes={filterAttributes}
                                    onSelectFilter={this.onSelectFilter}
                                    runOnOpenFilter={this.runOnOpenFilter}
                                    selectedFilters={selectedFilters}
                                />

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

Index.getInitialProps = async ({ store, query: { categoryID } }) => {
    await store.dispatch(getAttributes(categoryID));
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        attributes: state.productReducer.attributes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getByCategory: bindActionCreators(getByCategory, dispatch),
        getAttributes: bindActionCreators(getAttributes, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
