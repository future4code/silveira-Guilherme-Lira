import React from "react";
import { Header } from './Header/Header'
import { WebSite } from "./Header/style";
import { Footer } from './Footer/Footer'
import { Router } from "./routes/Router";

function App() {
  return (
    <WebSite>
      <Header/>
      <Router/>
      <Footer />
    </WebSite>
  );
}

export default App;