import logo from './logo.svg';
import './App.css';
import './css/nav.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
    return (
        <Router>
            <div>
                <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>

                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                </Routes>

            </div>
        </Router>
    );
}

export default App;
