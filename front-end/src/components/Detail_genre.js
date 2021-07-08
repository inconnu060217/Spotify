import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {Title} from '../components';
import '../styles/Detail_genre.css';


function Detail_genre() {
    const [detailGenre, setDetailGenre] = useState(null);
    const [albumGenre, setAlbumGenre] = useState(null);
    let history = useHistory();
    let location = useLocation();
    let name = location.pathname.split("/")[2];
    const colorsArray = [
        '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];
    useEffect(() => {
        if(!detailGenre){
            fetch('http://127.0.0.1:5000/detail_genre/' + name)
                .then(res => res.json())
                .then(res => setDetailGenre(res))
        }
        if(!albumGenre){
            fetch('http://127.0.0.1:5000/genres/albums/' + name)
                .then(res => res.json())
                .then(res => setAlbumGenre(res))
            }
    }, [detailGenre, albumGenre])
    const handleRedirection = (name) => {
        history.push('/detail_album/' + name)
    }
    if(!detailGenre || !albumGenre) return <div>Chargement...</div>
    return (
        <div className='detail-genre-container'>
            <Title title='Detail Genre'/>
            {
                detailGenre.map((detail, index) => {                   
                    return <div key={index} className='content-detail-genre'>
                        <div className='infos-genre'>
                            <div className='detail-detail'>
                                <div
                                    className='img-genre'
                                    style={{
                                        background: colorsArray[Math.floor(Math.random() * 50)]
                                    }}
                                >
                                    {/* <img src={detail.name} /> */}
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
