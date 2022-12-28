import '../styles/globals.css'
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material'
import Layout from '../components/Layout';
import {theme} from '../components/theme';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
