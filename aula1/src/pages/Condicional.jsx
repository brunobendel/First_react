// Renderização condicional

import { useState } from "react";

export function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  const [copied, setCopied] = useState(false);

  function teste(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limpaEmail() {
    setUserEmail("");
  }

  function handleCopy() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="content">
      <form onSubmit={teste}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button>Botão Enviar</button>
      </form>
      {userEmail && (
        <div>
          {copied ? (
              <p>Copiado com Sucesso</p>
              ) : (
              <p>O e-mail cadastrado foi {userEmail}</p>
          )}
          <button onClick={handleCopy}>Copiar e-mail</button>
          <button onClick={limpaEmail}>Limpa Email</button>
        </div>
      )}
    </div>
  );
}
