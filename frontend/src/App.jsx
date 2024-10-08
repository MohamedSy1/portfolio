import SideNavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects/projects";
import React, { lazy, Suspense } from "react";
import About from "./components/about/about";

const Hero = lazy(() => import("./components/hero/hero"))

function App() {

  return (
    <div className="grid grid-4-[54px_1fr]">
      <SideNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/HireMe/About" element={<Header />}></Route>
          <Route path="/HireMe/Projects" element={<Projects />}></Route>
          <Route path="*" element={<Header />}></Route>
        </Routes>
        <div className="mx-auto space-y-32 pb-24 pr-24">
          <Hero />
          <About />
          <Projects />
          {/* <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/HireMe/Projects" element={<Projects />}></Route>
            <Route path="/HireMe/About" element={<About />}></Route>
            <Route path="*" element={<Header />}></Route>
        </Routes> */}
        </div>
      </Suspense>
    </div>
  )
}

export default App;
