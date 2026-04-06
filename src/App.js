import React, { useState, useEffect } from "react";
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
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onOver = (e) => {
      setHovering(!!e.target.closest("a, button, [data-hover]"));
    };

    // Ring lags behind dot via rAF
    let rafId;
    let rx = -100, ry = -100;
    let tx = -100, ty = -100;

    const moveDot = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      setCursorPos({ x: tx, y: ty });
    };

    const animateRing = () => {
      rx += (tx - rx) * 0.14;
      ry += (ty - ry) * 0.14;
      setRingPos({ x: rx, y: ry });
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", moveDot);
    window.addEventListener("mouseover", onOver);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveDot);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="cursor-dot"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div
        className={`cursor-ring${hovering ? " cursor-ring--hover" : ""}`}
        style={{ left: ringPos.x, top: ringPos.y }}
      />

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
