import { Provider } from 'react-redux';
import '../styles/globals.css'; // your global styles
import HomePage from './pages';
import store from './pages/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default MyApp;
