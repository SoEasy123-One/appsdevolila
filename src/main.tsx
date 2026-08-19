import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import GuestLayout from "@/pages/guest/layout";

import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import ContactPage from "@/pages/guest/contact";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Guest Pages */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Dashboard Pages */}
    </Routes>
  </BrowserRouter>,
)