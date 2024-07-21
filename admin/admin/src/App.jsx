import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {Route, Routes} from "react-router-dom";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Order from "./pages/Order/Order.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {url} from "./api.js";

const App = () => {
    return (
        <div>
            <ToastContainer/>
            <Navbar/>
            <hr/>
            <div className='app-content'>
                <Sidebar/>
                <Routes>
                    <Route path='/add' element={<Add url={url}/>}/>
                    <Route path='/list' element={<List url={url}/>}/>
                    <Route path='/orders' element={<Order url={url}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;