/* import RenderCondicional from "./components/renderizadoCondicional";
import Cabecera from "./components/caabecera";
import EnvioDatos from "./components/envioDeDatos";
import EnvioDatos2 from "./components/EnvioDatos2"; */
/* import Eventos from "./components/Eventos";
import Eventos2 from "./components/Eventos2"; */
/* import PuntoUno from "./components/punto1";
import Segundo from "./components/punto2";
import Tercero from "./components/punto3"; */
/* import ConsumirApi from "./components/ConsumirApi"; */
/* import ConsumirApi2 from "./components/ConsumirApi2"; */
import Buscar from "./components/Buscar";
import FrmAgregar from "./components/FrmAgregar";
import ListarPeliculas from "./components/ListarPeliculas";
function App() {
  //Render
  return (
    <>
      <div className="layout">
        <header className="header">
          <div className="logo">
            <img src="pelisred-min.png" alt="" />
          </div>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <a href="www.test.com">Inicio</a>
            </li>
            <li>
              <a href="www.test.com">Peliculas</a>
            </li>
            <li>
              <a href="www.test.com">Blog</a>
            </li>
            <li>
              <a href="www.test.com">Contacto</a>
            </li>
          </ul>
        </nav>
        <ListarPeliculas />
        <aside className="lateral">
          <Buscar />
          <FrmAgregar />
        </aside>
        <footer className="footer">
          &copy; Peliculas !! -<a href="https://pelisflix.quest/">pelisflix</a>
        </footer>
      </div>
    </>
  );
}

export default App;
