import './App.css'
import axios from 'axios';
import Home from './pages/webpages/home.tsx';
import CategoryPage from './pages/webpages/CategoryPage';
import {Route, Routes} from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:8000';

function App() {

    return (
        <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/categories/:categoryName" element={<CategoryPage />} />
        </Routes>
    );
}

export default App
