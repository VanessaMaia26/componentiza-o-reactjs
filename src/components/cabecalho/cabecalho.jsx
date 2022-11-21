import FotoFundo from "../../assets/fundo.jpg";
import "./cabecalho.css";

export default function Cabecalho () {
    return (
        <div className="cabecalho">

            <div className="cabecalhoTitulo">

                <span className="cabecalhoTituloCima">
                    Programação II
                </span>

                <span className="cabecalhoTituloBaixo">
                    Site
                </span>

              <img
                className="cabecalhoImg"
                src={FotoFundo}
                alt=""
              />
            </div>

        </div>
    )
}