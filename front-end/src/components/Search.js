import React, { useState, useEffect } from 'react';
import '../styles/Search.css';
// import '../styles/Artists.css';
import { useHistory } from 'react-router-dom';
import {Title} from '../components'

function Search() {
    const [albums, setAlbums] = useState(null);
    const [artists, setArtists] = useState(null);
    const [selectOptionValue, setSelectOptionValue] = useState("");
    const [search, setSearch] = useState("");
    let history = useHistory();
    useEffect(() => {
        if(!artists){
            fetch("http://127.0.0.1:5000/artists")
            .then(res => res.json())
            .then(res => setArtists(res))
            .catch(err => console.log(err))
        }
        if(!albums){
            fetch("http://127.0.0.1:5000/albums")
                .then(res => res.json())
                .then(res => setAlbums(res))
                .catch(err => console.log(err))
        }
    }, []);
    const handleRedirectDetailArtists = (name) => {
        history.push('/detail_artist/' + name);
    }
    const handleRedirectDetailAlbum = (name) => {
        history.push('/detail_album/' + name);
    }
    return (
        <div className='search-container'>
            <Title title='search' />
            <div className='search-content'>
                <input 
                type='search' 
                placeholder='Recherche artistes ou albums......' 
                onChange={(e) => setSearch(e.target.value)} />

                <select name="search" 
                    onChange={
                        (e) => {
                            setSelectOptionValue(e.target.value);
                        }
                    }>
                    <option value="">Catégorie</option>    
                    <option value="artists">Artists</option>
                    <option value="albums">Albums</option>
                </select>
            </div>
            {
                selectOptionValue == '' ? 
                <div>
                    <p>Veuillez selectionnez la Catégorie de votre recherche !</p>
                </div>
            : null }
            {
                selectOptionValue == 'artists' ?
                    <div className='container-artists'>
                        <div  className="artists-container">
                        {
                            artists
                            .filter((val)=>{
                                return val.name.toLowerCase().includes(search.toLowerCase());
                            })
                            .map((artist, index) => {
                                return (
                                    <div key={index} onClick={() => handleRedirectDetailArtists(artist.name)} className='artists-content'>
                                        <div className="artists">
                                            <div className='logo-artists'>
                                                <img src={artist.photo} alt='' />
                                            </div>
                                            <div >
                                                <p className='name-artists'>{artist.name}</p>
                                                <p className='artist'>Artiste</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
            : null }
            {
                selectOptionValue == 'albums' ?
                    <div className="albums-container">
                        <div className='content-albums'>
                            {
                                albums
                                .filter((val)=>{
                                    return val.name.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((item, index) => {
                                    return <div key={index} onClick={() => handleRedirectDetailAlbum(item.name)} className="content">
                                        <img 
                                            src={item.cover ? item.cover : '/img/spotify.png'}
                                            />
                                            <p className='title'>{item.name}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
            : null }
        </div>
    )
}
export default Search;
