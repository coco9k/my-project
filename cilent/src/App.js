import React, { Suspense } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { News } from "./components/News";
import { NewsSinglePage } from "./components/NewsSinglePage";
import { NavBar } from "./components/NavBar";
import { PageHome } from "./pages/PageHome";
import { PageAbout } from "./pages/PageAbout";
import { PageTournament } from "./pages/PageTournament";
import { PageContact } from "./pages/PageContact";
import { Page404 } from "./pages/Page404";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/tournament" element={<PageTournament />} />
          <Route path="/contact" element={<PageContact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<NewsSinglePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;