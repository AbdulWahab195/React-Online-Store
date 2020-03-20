import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/style.css';
import '../assets/styles/app.css';
import '../assets/styles/responsive.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';
import 'animate.css/animate.min.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';

import { Provider } from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import { getCategories } from '../store/actions/categoriesAction';

export default withRedux(initStore)(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx, ctx: { store } }) {
            await store.dispatch(getCategories());
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <Container>
                    <DefaultSeo
                        title="Westgate Manufacturing - The Future Is Here .... And It's Quite Bright!"
                        description=""
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://www.westgatemfg.com/',
                            site_name: 'Westgate Manufacturing',
                        }}
                    />
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Container>
            );
        }
    }
)