import '../styles/globals.css'
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
