import './barratopo.css';
import LogoReact from "../../assets/react.png";

export default function BarraTopo() {
    return (
      <>
        <div className="topo">

          <div className="topoEsquerda"></div>

          <div className="topoCentro">
            <ul className="topoLista">
              <li>ÍNICIO</li>
              <li>SOBRE</li>
              <li>CONTATO</li>
              <li>ESCREVA</li>
              <li>SAIR</li>
            </ul>
          </div>


          <div className="topoDireita">
            <img
              className="topoImg"
              src={LogoReact}
            />
          </div>

        </div>
      </>
    )
}