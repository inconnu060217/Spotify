import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {Title} from '../components';
import "../styles/Acceuil.css";

function Acceuil() {
    const [albums, setAlbums] = useState(null);
    const [loarding, setLoarding] = useState(false);
    let history = useHistory();
    useEffect(() => {
        if (!albums) {
        fetch("http://127.0.0.1:5000/albums")
            .then((res) => res.json())
            .then((res) => setAlbums(res));
        }
    }, [albums]);
    const handleRedirection = (name) => {
        history.push("/detail_album/" + name);
    };
    if (!albums) return <div>Chargement...</div>;
    // console.log(thirtyElementAleatoires);
    return (
    <div>
        <div className="acceuil-container">
                <div className='component-title'>
                    <Title 
                    title='Acceuil'
                    />
                </div>
            <div className="acceuil-albums">
                {albums.splice(Math.floor(Math.random() * albums.length),30).map((item, index) => {
                    return (
                        <div
                        key={index}
                        onClick={() => handleRedirection(item.name)}
                        className="acceuil"
                        >
                        <img src={item.cover ? item.cover : "/img/spotify.png"} />
                        <p className="title-album-acceuil">{item.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default Acceuil;
