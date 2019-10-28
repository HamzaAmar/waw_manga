import App from "next/app";
import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        <Header />
        <Component />
        <Footer />
      </div>
    );
  }
}

export default MyApp;
