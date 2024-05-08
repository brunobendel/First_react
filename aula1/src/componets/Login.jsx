// # UseState exemplo

import { useState } from "react";
import { Button } from "./Button";

export function Login() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
  }
  function teste() {
    console.log("teste aqui");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          {/*setName atribui valor e o valor atribuido é resgatado no name*/}
        </div>
        <div>
          <input
            type="password"
            placeholder="Digite a senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button event={teste} text="Primeiro evento"></Button>
        </div>
      </form>
    </div>
  );
}
