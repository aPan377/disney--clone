import React from "react";
import "./App.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import { createBrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
    </div>
  );
}

export default App;
