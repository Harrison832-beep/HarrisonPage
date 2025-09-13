import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { baseName } from "./router";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path={`/${baseName}`} element={<Home />} />
      </Routes>
    </div>
  );
}
