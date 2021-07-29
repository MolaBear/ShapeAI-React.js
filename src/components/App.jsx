import React from "react";
import Header from "./Header";
import {Boot, Netflix, OpenCv, Cloud} from "./Boot";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Boot />
      <Netflix />
      <OpenCv />
      <Cloud />
      <Footer />
    </div>
  );
}

export default App;
