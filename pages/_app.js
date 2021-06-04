import "../styles/globals.css";
import { SWRConfig } from "swr";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <SWRConfig
        value={{
          fetcher: (...args) => fetch(...args).then((res) => res.json()),
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </SafeHydrate>
  );
}

export default MyApp;
