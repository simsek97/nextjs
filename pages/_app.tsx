import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"FS Industrie", Helvetica, Arial, sans-serif'
  }
});
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
