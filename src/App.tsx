import {BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./containers/Home/Home.tsx";
import About from "./containers/About/About.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path={"/about"} element={<About />}/>
                    <Route path={"/contact"} element={<div className="bg-white">Contacts</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
