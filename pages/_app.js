import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import Nav from "../components/nav";


const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
        <Head>
          <title>Bert Järv</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <Nav />
        <Component {...pageProps} />
    </ApolloProvider>
  );
};

// Wraps all components in the tree with the data provider
export default withData(App);
