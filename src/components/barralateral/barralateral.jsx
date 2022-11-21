import FotoModelo from "../../assets/fotomodelo.webp"
import "./barralateral.css";

export default function BarraLateral () {
    return (
        <>
          <div className="barraLado">

            <div className="barraLadoItem">
                <span className="barraLadoTitulo">
                    SOBRE MIM
                </span>

                <img
                  src={FotoModelo}
                  alt=""
                />

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>    

                <div className="barraLadoItem">
                <span className="barraLadoTitulo">
                        CATEGORIAS
                    </span>

                    <ul className="barraLadoLista">
                        <li>VIDA</li>
                        <li>MÚSICA</li>
                        <li>ESPORTE</li>
                        <li>TECNOLOGIA</li>
                    </ul>
                </div>
            </div>

          </div>
        </>
    )
}