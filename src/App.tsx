import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<h1>Hello</h1>}></Route>
                <Route path={'/Menu'} element={<h1>Menu</h1>}></Route>
                <Route path={'/Select'} element={<h1>Select</h1>}></Route>
            </Routes>
        </div>


    );
}

export default App;
