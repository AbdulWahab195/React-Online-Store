import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Partner from '../components/Common/Partner';
import Breadcrumb from '../components/Common/Breadcrumb';
import { getVideos } from '../store/actions/resourcesActions';
class Index extends Component {
    componentDidMount() {
        const { videos, getVideos } = this.props;
        getVideos();
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="About Us" />
                <section className="about-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <p className="col-md-12 catalogs-heading">Videos</p>
                        </div>
                        <div className="row">
                            {this.props.videos.map(video => {
                                return (
                                    <div className="col-md-4 catalogs-item">
                                        <iframe src={video.videoURL}
                                            frameBorder='0'
                                            allow='autoplay; encrypted-media'
                                            allowFullScreen
                                            title='video'
                                        />
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
    await store.dispatch(getVideos);
}

const mapStateToProps = (state) => {
    return {
        videos: state.videosReducer.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVideos: bindActionCreators(getVideos, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
