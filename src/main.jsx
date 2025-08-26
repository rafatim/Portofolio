import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Aurora from "./components/Aurora.jsx"; // import aurora
import Footer from "./components/footer.jsx";

import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#808080", "#1E90FF", "#FFA500"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* Konten utama */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 scale-95">
  <App />
</div>

        <Footer />
      </div>
    </div>
  </StrictMode>
);

