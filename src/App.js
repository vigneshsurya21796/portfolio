import React from "react";
import { Navbar, Header, Contactme, Aboutme, Skills } from "./Components";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />

        <Aboutme />
        <Skills />
        <Contactme />
      </div>
    </div>
  );
}

export default App;
