import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (

    <>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="dentista/:id" element={<Detail />} />
          <Route path="favs" element={<Favs />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
