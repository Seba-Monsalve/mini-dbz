import { Navbar } from "./components/Navbar"
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharactersPage, NotFound, WorldPage } from "./pages/";



function App() {


  //TODO: HERMOSEAR
  //TODO: mundo y su api
  // quiz

  //TODO: reac router
  //TODO: reac router

  //TODO: en portafolio inglsm

  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<CharactersPage />} />
          <Route path="/worlds" element={<WorldPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>


  )
}

export default App
