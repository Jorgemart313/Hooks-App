import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { HooksShowcase } from "./05-webpage/useweb";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HooksShowcase />
  </StrictMode>,
);
