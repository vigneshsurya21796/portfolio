import React from "react";
import { Navbar, Header, Contactme, Aboutme } from "./Components";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Header />

        <Aboutme />
        <Contactme />
      </div>
    </div>
  );
}

export default App;
