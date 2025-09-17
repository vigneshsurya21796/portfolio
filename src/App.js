import React from "react";
import {
  Navbar,
  Header,
  Contactme,
  Aboutme,
  Skills,
  Recentprojects,
} from "./Components";
import  { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <div className="App__container">
        <Navbar />
        <Header />

        <Aboutme />
        <Recentprojects />
        <Skills />
        <Contactme />
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: "var(--font-family--1), serif", // or any other font
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
}

export default App;
