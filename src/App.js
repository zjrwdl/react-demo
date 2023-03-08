import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
function App() {
    return (
        <Router>
            <div className="Demo">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
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
