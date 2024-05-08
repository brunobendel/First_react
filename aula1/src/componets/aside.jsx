import { Link } from "react-router-dom";

export function Aside() {
  return (
    <aside className="aside">
      <section>
        <h3>
          <Link to="/" className="link">
            Home
          </Link>
        </h3>
      </section>
      <section>
        <h3>
          <Link to="/condicional" className="link">
            Condicional
          </Link>
        </h3>
      </section>
      <section>
        <h3>
          <Link to="/modal" className="link">
            Exemplo Modal
          </Link>
        </h3>
      </section>
      <section>
        <h3>
          <Link to="/tabela" className="link">Tabela e Filtro</Link>
        </h3>
      </section>
    </aside>
  );
}
