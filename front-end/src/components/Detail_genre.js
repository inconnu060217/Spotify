import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import '../styles/Detail_genre.css';


function Detail_genre() {
    const [detailGenre, setDetailGenre] = useState(null);
    const [albumGenre, setAlbumGenre] = useState(null);
    let history = useHistory();
    let location = useLocation();
    let name = location.pathname.split("/")[2];
    useEffect(() => {
        if(!detailGenre){
            fetch('http://127.0.0.1:5000/detail_genre/' + name)
                .then(res => res.json())
                .then(res => setDetailGenre(res))
        }
        else if(!albumGenre){
            fetch('http://127.0.0.1:5000/genres/albums/' + name)
                .then(res => res.json())
                .then(res => setAlbumGenre(res))
            }
    }, [detailGenre, albumGenre])
    console.log(albumGenre);
    const handleRedirection = (name) => {
        history.push('/detail_album/' + name)
    }
    if(!detailGenre || !albumGenre) return <div>Chargement...</div>
    return (
        <div className='detail-genre-container'>
            {
                detailGenre.map((detail, index) => {                   
                    return <div key={index} className='content-detail-genre'>
                        <div className='infos-genre'>
                            <div className='detail-detail'>
                                <div className='img-genre'>
                                    <img src={detail.name} />
                                </div>
                                <div className='info-genre'>
                                    <p className='genre'>GENRE</p>
                                    <p className='name-genre'>{detail.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            <div className='genre_album-container'>
                <div className='all-albums-genre'>
                    <p>Albums</p>
                </div>
                <div className='genre-album-content'>
                    {
                        albumGenre.map((albumgenr, index) => {
                            return <div key={index} onClick={() => handleRedirection(albumgenr.name)} className='artists-album'>
                            <div className="img-album-genre">
                                <img className="img-album-g" src={albumgenr.cover}/>
                            </div>
                            <div>
                                <p>{albumgenr.name}</p>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail_genre;
