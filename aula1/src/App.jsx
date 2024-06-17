import { Header } from "./componets/Header";
import "./styles.css";
import { Condicional } from "./pages/Condicional";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aside } from "./componets/aside";
import { Modal } from "./pages/ExemploModal";
import { Tabela } from "./pages/Tabela";
import { Teste } from "./pages/teste";

export function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Condicional" element={<Condicional />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/Tabela" element={<Tabela />} />
            <Route path="/teste" element={<Teste />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
