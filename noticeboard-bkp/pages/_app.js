import Navbar from "../components/Navbar";
import { Provider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
