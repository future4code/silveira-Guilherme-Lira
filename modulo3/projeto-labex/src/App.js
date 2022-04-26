import React from "react";
import { Header, WebSite } from './components/main/Header'
import { Footer } from './components/main/Footer'
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
