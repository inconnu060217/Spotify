import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Genre.css';

function Genres() {
    const [genres, SetGenre] = useState(null);
    let history = useHistory();
    useEffect(() => {
        if(!genres){
            fetch("http://127.0.0.1:5000/genres")
                .then(res => res.json())
                .then(res => SetGenre(res))
            }
    }, [genres])
    const handleRedirection = (name) => {
        history.push('/detail_genre/' + name);
    }
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
    ]
    if(!genres) return <div>Chargement...</div>
    return (
        <div className='genre-container'>
            {
                genres.map((genre, index) => {
                    return (
                        <div key={index} 
                            onClick={() => handleRedirection(genre.name)}
                            className='genre-content'
                            style={{
                                background: colorsArray[Math.floor(Math.random() * 50)]
                            }}
                        >
                            <div className='genre-name'>
                                <h1>{genre.name}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Genres;
