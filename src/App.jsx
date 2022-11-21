import BarraTopo from "./components/barratopo/barratopo";
import Cabecalho from "./components/cabecalho/cabecalho";
import BarraLateral from "./components/barralateral/barralateral";
import AreaPostagem from "./components/areapostagem/areapostagem";

import "./App.css";

export default function App() {
    return (
        <>

        <BarraTopo />
        <Cabecalho />

        <div className="appInicial">
          <AreaPostagem />
          <BarraLateral />
        </div>

        </>

    )
}
