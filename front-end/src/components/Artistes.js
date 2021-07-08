import React, { useEffect, useState } from 'react'
import '../styles/Artists.css'
import {Title} from '../components';
import Paginations from './paginations';
import { useHistory } from 'react-router-dom'

function Artistes() {
    const[artists, setArtists] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [artistsPerPage, setArtistsPerPage] = useState(25);
    let history = useHistory();
    useEffect(()=>{
        if(!artists){
            fetch("http://127.0.0.1:5000/artists")
            .then(res => res.json())
            .then(res => setArtists(res))
        }
    },[artists])
    const handleRedirection = (name)=>{
        history.push('/detail_artist/' + name)
        // console.log(name)
    }
    const indexOfLastAlbums = currentPage * artistsPerPage;
    const indexOfFirtsAlbums = indexOfLastAlbums - artistsPerPage;
    const currentArtists = artists ? artists.slice(indexOfFirtsAlbums, indexOfLastAlbums) : null;
    if(!artists) return <div>Chargement...</div>
    return (
        <>
        <div className='container-artists'>
            <Title title='Artistes'/>
        <div  className="artists-container">
            {
                currentArtists.map((artist, index) => {
                    return (
                        <div key={index} onClick={() => handleRedirection(artist.name)} className='artists-content'>
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
        <div className='paginations-artists'>
                <Paginations 
                elementPerPage={artistsPerPage} 
                totalElement={artists.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                nb={25}
                />
            </div>
        </>
    )
}

export default Artistes;
