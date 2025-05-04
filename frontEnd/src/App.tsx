import './App.css'
import axios from 'axios';
import Home from './pages/webpages/home.tsx';
import {Route, Routes} from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:8000';

function App() {

    return (
        <Routes>
            <Route path = "/" element={<Home />} />
        </Routes>
    );
}

export default App
