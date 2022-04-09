import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { CryptohoodProvider } from "../context/CryptohoodContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.MORALIS_SERVER_URL}
      appId={process.env.MORALIS_APP_ID}>
      <CryptohoodProvider>
        <Component {...pageProps} />
      </CryptohoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
