import '../styles/globals.css'
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material'
import Layout from '../components/Layout';
import { theme } from '../components/theme';
import { QueryClientProvider, QueryClient } from 'react-query'
import { SnackbarProvider } from 'notistack'
import { SessionProvider } from 'next-auth/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

export default function App({ Component, session, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SnackbarProvider>
          </ThemeProvider>
        </Provider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
