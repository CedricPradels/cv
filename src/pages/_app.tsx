import { NextPage } from "next";
import { AppProps } from "next/app";
import { Layout } from "@components/Layout";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
