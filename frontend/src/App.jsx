import SideNavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/sections/projects";
import React, { lazy, Suspense } from "react";


const Header = lazy(() => import("./components/sections/header"))

function App() {

  return (
    <div>
      <SideNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/HireMe/About" element={<Header />}></Route>
          <Route path="/HireMe/Projects" element={<Projects />}></Route>
          <Route path="*" element={<Header />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
