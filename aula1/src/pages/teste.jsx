import { useState } from "react";
import logoImg from "../assets/react.svg";

export const Teste = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Adicione aqui a lógica para enviar o e-mail
    console.log("Email enviado:", email);
  };

  return (
    <div
      id="page-auth"
      className="flex flex-col lg:flex-row items-stretch h-screen w-screen"
    >
      <main className="lg:w-3/5 p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-xs mt-8">
          <div className="flex items-center mb-4">
            <label
              className="mr-4 text-indigo-600"
              htmlFor="email"
            >
              Email
            </label>
            <input 
              className="border rounded px-4 py-2 w-full"
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex justify-center">
            <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </main>
      <aside className="lg:w-2/5 bg-indigo-600 text-white flex flex-col justify-center p-12">
        <img
          src={logoImg}
          alt="Ilustração aqui"
          className="max-w-xs opacity-50 mx-auto lg:mx-0"
        />
        <div className="text-center lg:text-left">
          <strong className="font-bold text-3xl mt-4">Bem-vindo</strong>
          <p className="text-xl mt-4">Faça login e aproveite</p>
        </div>
      </aside>
    </div>
  );
};
