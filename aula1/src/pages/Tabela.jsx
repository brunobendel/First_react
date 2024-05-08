import { useState } from "react";

const carros = [
  { categoria: "Esporte", Preço: "100000", modelo: "Golf GTI" },
  { categoria: "Esporte", Preço: "130000", modelo: "Camaro" },
  { categoria: "SUV", Preço: "110000", modelo: "HRV" },
  { categoria: "SUV", Preço: "120000", modelo: "T-CROSS" },
  { categoria: "Popular", Preço: "60000", modelo: "UP" },
  { categoria: "Popular", Preço: "50000", modelo: "Mobi" },
];

const linhas = (cat) => {
  const li = [];
  carros.forEach((carro) => {
    if (carro.categoria.toUpperCase() == cat.toUpperCase() || cat == "") {
      li.push(
        <tr>
          <td>{carro.categoria}</td>
          <td>{carro.Preço}</td>
          <td>{carro.modelo}</td>
        </tr>
      );
    }
  });
  return li;
};

const TabelaCarros = (cat) => {
  return (
    <>
      <table className="">
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

const pesquisaCategoria = (cat, scat) => {
  return (
    <div>
      <label> Digite uma Categoria: </label>
      <input type="text" value={cat} onChange={(e) => scat(e.target.value)} />
    </div>
  );
};

export function Tabela() {
  const [categoria, setCategoria] = useState("");
  return (
    <div className="content gap-1">
      <div className="gap-4">
        <div>{pesquisaCategoria(categoria, setCategoria)}</div>
        <br />
        <div>{TabelaCarros(categoria)}</div>
      </div>
    </div>
  );
}
