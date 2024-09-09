import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewTask } from "../pages/NewTask";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newtask" element={<NewTask />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
