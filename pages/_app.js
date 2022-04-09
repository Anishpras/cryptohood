import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { CryptohoodProvider } from "../context/CryptohoodContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://z04nnu74wfdl.usemoralis.com:2053/server"
      appId="M7uUOSK5WkhPWGSTuCltp0Q9x35oph12SMk23Idg">
      <CryptohoodProvider>
        <Component {...pageProps} />
      </CryptohoodProvider>
    </MoralisProvider>
  );
}

export default MyApp;
