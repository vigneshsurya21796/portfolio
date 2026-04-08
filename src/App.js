import React from "react";
import {
  Navbar,
  Header,
  Contactme,
  Aboutme,
  Skills,
  Recentprojects,
} from "./Components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
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
            background: "#1A1A1A",
            color: "#EDE8E0",
            border: "1px solid #222222",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "14px",
          },
        }}
      />
    </>
  );
}

export default App;
