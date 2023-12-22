// Custom scrollbar
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {Routes, Route} from "react-router-dom";

// Components
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

// Pages
import AboutPage from "./pages/AboutPage.tsx";
import HomePage from "./pages/HomePage.tsx";

export default function App() {
    return (
        <>
            <SimpleBar style={{maxHeight: 300}} forceVisible="y" autoHide={false} />
            <Header/>
            <main className="main">
                <Routes>
                    <Route element={<HomePage/>} path={"/"}/>
                    <Route element={<AboutPage/>} path={"/about"}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}