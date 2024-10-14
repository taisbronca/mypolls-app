import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/routes.jsx";
import { GlobalStyles } from "./styles/global.jsx";
import UserProvider from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <UserProvider>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
   </UserProvider>
  </StrictMode>
);
