import "./postagem.css";
import FotoPost from "../../assets/fotopost.jpg";

export default function Postagem () {
    return (
        <>
           <div className="postImg">
            <img
              src={FotoPost}
              alt=""
            />
              
              <div className="postInfo">
                <div className="postCat">
                    <span>Programação</span>
                </div>

                <div className="postTitulo">
                    <span>Título da Postagem</span>
                </div>

                <div className="postData">
                    <span>20 Ago 2022</span>
                </div>

              </div>

              <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, deserunt? Velit soluta vel aliquid distinctio! Repellat a iure quam totam laboriosam sunt sint odit, natus dolore earum ex quidem architecto.
              </p>
           </div>
        </>
    )
}