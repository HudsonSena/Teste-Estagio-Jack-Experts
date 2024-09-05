import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Details } from "./pages/Details/Details";
import { SignIn } from "./pages/SignIn";
import { SignOut } from "./pages/SignOut";
import { Home } from "./pages/Home";
import { NewTask } from "./pages/NewTask";
import { UpdateTask } from "./pages/UpdateTask";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignIn />
    <SignOut />
    <Home />
    <Details />
    <NewTask />
    <UpdateTask />
  </StrictMode>
);
