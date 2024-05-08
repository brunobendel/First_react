import PropTypes from "prop-types";

export function Main({ marca, ano }) {
  return (
    <main className="content">
      <strong>Meu Conteudo aqui</strong>
      <li>
        {marca} - {ano}
      </li>
    </main>
  );
}
Main.propTypes = {
  marca: PropTypes.string,
  ano: PropTypes.number,
};

Main.defaultProps = {
  marca: "Faltou a marca",
  ano: 0,
};
