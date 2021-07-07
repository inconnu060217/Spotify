import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCaretRight, FaRegHeart } from 'react-icons/fa';
import '../styles/Detail_artists.css'
// import { AiTwotoneHeart } from 'react-icons/ai'
import '../styles/Detail_album.css';

function Detail_album() {
    let location = useLocation();
    let name = location.pathname.split("/")[2];
    const [detailAlbum, setDetailAlbum] = useState(null);
    const [tracks, setTracks] = useState(null);
    useEffect(() => {
        if(!detailAlbum){
            fetch('http://127.0.0.1:5000/albums/' + name)
                .then(res => res.json())
                .then(res => setDetailAlbum(res))
        }
        else if(!tracks){
            fetch('http://127.0.0.1:5000/albums/tracks/' + name)
                .then(res => res.json())
                .then(res => setTracks(res))
            }
    }, [detailAlbum, tracks])
    // console.log(tracks);
    if(!detailAlbum || !tracks) return <div>Chargement...</div>
    return (
        <div className='detail-container'>
            {
                detailAlbum.map((item, index) => {                   
                    return <div key={index} className='content-detail-album'>
                        <div className='infos-albums'>
                            <div className='detail-album'>
                                <div className='img-album'>
                                    <img src={item.cover} />
                                </div>
                                <div className='infos-album'>
                                    <p className='album'>ALBUM</p>
                                    <p className='name-album'>{item.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })
                
            }
            <div className='content-tracks-albums'>
                <div className='infos-tracks-albums'>
                    <div className='play-icone'>
                        <button className='icon-play'><FaCaretRight size={45} /></button>
                        <button className='icon-heart'><FaRegHeart size={45} /></button>
                        <button className='icon-point'>...</button>
                    </div>
                    <div className='title-tracks'>
                        <p>#</p>
                        <p>TITRE</p>
                    </div>
                    <div className='div-bar'/>
                    {
                        tracks.map((track, index) =>{
                        // console.log(track)
                        let duration = track.duration
                        let min = (duration / 60).toFixed(2);
                            return <div key={index} className='tracks-list'>
                                <div className='content-number-tracks'>
                                    <div className='number-tracks'>
                                        <p className='no-track'>{track.track_no}</p>
                                    </div>
                                    <div className='content-tracksList'>
                                        <p className='name-track'>{track.name}</p>
                                    </div>
                                </div>
                                <div className='duration-track'>
                                    <audio controls  className='duration'>
                                        <source src={track.mp3} type='audio/mp3' />
                                    </audio>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail_album;
