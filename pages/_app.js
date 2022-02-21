import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import '../styles/globals.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { useEffect } from 'react';

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
