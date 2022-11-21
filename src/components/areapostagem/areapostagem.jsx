import "./areapostagem.css";
import Postagem from "../postagem/postagem"

export default function AreaPostagem () {
    return (
        <>
            <div className="posts">
                <Postagem />
                <Postagem />
                <Postagem />
                <Postagem />
            </div>
        </>
    )
}