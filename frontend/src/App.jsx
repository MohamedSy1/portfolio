import SideNavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects/projects";
import React, { lazy, Suspense } from "react";
import About from "./components/about/about";
import ExperienceContainer from "./components/Experience/experienceContainer";

const Hero = lazy(() => import("./components/hero/hero"))

function App() {

  return (
    <div className="grid grid-4-[54px_1fr]">
      <SideNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="mx-auto space-y-32 pb-24 pr-24">
          <Hero id="hero"/>
          <About  />
          <Projects />
          <ExperienceContainer/>
     
        </div>
      </Suspense>
    </div>
  )
}

export default App;
