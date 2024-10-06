import SideNavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./projects/projects";
import React, {lazy, Suspense} from "react";
import About from "./components/about/about";

const Hero = lazy(() => import("./components/hero/hero"))

function App() {
  
  return (
    <div className="grid grid-row-[54px_1fr]">
      <SideNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Hero />

        {/* <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/HireMe/Projects" element={<Projects />}></Route>
            <Route path="/HireMe/About" element={<About />}></Route>
            <Route path="*" element={<Header />}></Route>
        </Routes> */}
      </Suspense>
    </div>
  )
}

export default App;
