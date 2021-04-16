import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { SettingsProvider } from "../src/contexts/SettingsContext";
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
      <SettingsProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SettingsProvider>
    );
  }
}
