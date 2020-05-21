import React from "react";
import Head from "next/head";
import "../css/tailwind.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title className="m">Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default App;
