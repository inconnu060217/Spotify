import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
function Detail_artists() {
    const [detailArtists, setDetailArtists] = useState(null);
    const [albumArtists, setAlbumArtists] = useState(null);
    let location = useLocation();
    let history = useHistory();
    let name = location.pathname.split("/")[2];
    useEffect(() => {
        if(!detailArtists){
            fetch("http://127.0.0.1:5000/artists/" + name)
            .then(res => res.json())
            .then(res => setDetailArtists(res))
        }
        else if(!albumArtists){
            fetch("http://127.0.0.1:5000/albums/artists/" + name)
            .then(res => res.json())
            .then(res => setAlbumArtists(res))
        }
    }, [detailArtists ,albumArtists])
    const handleRedirection = (name)=>{
        history.push('/detail_album/' + name)
    }
    if(!detailArtists || !albumArtists) return <div>Chargement...</div>
    return (
        <div className='Detail_artists_container'>
            {
                detailArtists.map((detailArtist, index) => {
                    return <div key={index} className='content-detail-artists'>
                        <div className='infos-artists'>
                            <div className='detail-artists'>
                                <div className='img-artist'>
                                    <img src={detailArtist.photo} />
                                </div>
                                <div className='infos-artist'>
                                <p className='name-artist'>Artiste</p>
                                    <p className='name_artist'>{detailArtist.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            <div className='artists_album-container'>
                <div className='all-albums-artists'>
                    <p>Albums</p>
                </div>
                <div className='artists-album-content'>
                    {
                        albumArtists.map((albumArtist, index) => {
                            return <div key={index} onClick={() => handleRedirection(albumArtist.name)} className='artists-album'>
                            <div className="img-album-artists">
                                <img className="img-album-a" src={albumArtist.cover}/>
                            </div>
                            <div>
                                <p>{albumArtist.name}</p>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail_artists;
