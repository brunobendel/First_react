// import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


import { useState } from "react";

const carros = [
  { categoria: "Esporte", Preço: "100000", modelo: "Golf GTI" },
  { categoria: "Esporte", Preço: "130000", modelo: "Camaro" },
  { categoria: "SUV", Preço: "110000", modelo: "HRV" },
  { categoria: "SUV", Preço: "120000", modelo: "T-CROSS" },
  { categoria: "Popular", Preço: "60000", modelo: "UP" },
  { categoria: "Popular", Preço: "50000", modelo: "Mobi" },
];

const linhas = (cat: string): JSX.Element[] => {
  const li: JSX.Element[] = [];
  carros.forEach((carro) => {
    if (carro.categoria.toUpperCase() == cat.toUpperCase() || cat == "") {
      li.push(
        <tr className="hover:bg-slate-600 cursor-pointer">
          <td>{carro.categoria}</td>
          <td>{carro.Preço}</td>
          <td>{carro.modelo}</td>
        </tr>
      );
    }
  });
  return li;
};

const TabelaCarros = (cat: string) => {
  return (
    <>
      <table className="border-collapse">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>{linhas(cat)}</tbody>
      </table>
    </>
  );
};

const pesquisaCategoria = (cat: string, scat: (cat: string) => void) => {
  return (
    <div>
      <label> Digite uma Categoria: </label>
      <input type="text" value={cat} onChange={(e) => scat(e.target.value)}/>
    </div>
  );
};

export default function Tabela() {
  const [categoria, setCategoria] = useState("");
  return (
      <div className="min-h-screen bg-primary flex justify-center">
        <div className="m-auto border p-10">
          <div>{pesquisaCategoria(categoria, setCategoria)}</div>
          <div>{TabelaCarros(categoria)}</div>
        </div>
      </div>
  );
}
