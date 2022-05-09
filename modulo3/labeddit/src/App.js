import React from "react";
import { Header, WebSite } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Router } from "./routes/Router";

function App() {
  return (
    <WebSite>
      <Header />
      <Router />
      <Footer />
    </WebSite>
  );
}

export default App;