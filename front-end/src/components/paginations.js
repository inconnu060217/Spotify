import React, { useState } from 'react';
import '../styles/Pagination.css';

function Paginations({elementPerPage, totalElement, setCurrentPage, currentPage}) {
    //nombre de pages 10 !
    const [pageNumberLimit, setPageNumberLimit] = useState(10);
    // Nombre maximum 10 pages
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
    // Nombre mininum 0 pages
    const [minpageNumberLimit, setMinPageNumberLimit] = useState(0);
    const pageNumbers = [];

    // cette boucle =  on parcour le nombre total d'album en divisant par le nombre d'album qu'on veut affiche par page
    for(let i=1; i<=Math.ceil(totalElement / elementPerPage); i++){
        pageNumbers.push(i)
    }

    // cette function = à chaque clique sur un nombre la page de cet nombre s'affiche avec les elements
    const handleClick = (e)=>{
        setCurrentPage(Number(e.target.id));
    }

    // cette function = on map sur le tableau contenant le nombre de page existant et on l'affiche
    const renderPageNumbers = pageNumbers.map((number, index) => {
        // on a fiche 5 pages du nombre de page de paginations que number contient !
        if(number < maxPageNumberLimit + 1 && number > minpageNumberLimit){
            return <li
            key={index}
            onClick={handleClick}
            id={number}
            className={currentPage == number ? "active-pagination" : null}
            >
                {number}
            </li>
        }else {
            return null;
        }
    })
    
    // cette function = nous permet d'afficher 10 pages suivante quand les 10 autres pages précedentes sont parcourir
    const handleNextbtn = ()=>{
        setCurrentPage(currentPage + 1);
        // cette condition = Si le nombre de la page actuelle est supérieur au nombre de pages affigées actuelle alors on affiche le nombre des pages suivante que le nombre page afficgées precedent
        if(currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minpageNumberLimit + pageNumberLimit);
        }
    }
    
    // cette function = 
    const handlePrevbtn = ()=>{
        setCurrentPage(currentPage - 1);
        // cette condition = fait le contraire de la function "handleNextbtn"
        if((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minpageNumberLimit - pageNumberLimit);
        }
    }

    let pagesIncrementBtn = null;
    if(pageNumbers.length > maxPageNumberLimit){
        pagesIncrementBtn= <li onClick={handleNextbtn}>&hellip;</li>
    }
    let pagesDecrementBtn = null;
    if(pageNumbers.length > maxPageNumberLimit){
        pagesDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
    }

    
    return (
        <div> 
            <ul className='pageNumbers'>
                {
                    maxPageNumberLimit === 10 ? (
                    <>
                        {renderPageNumbers}
                        {pagesIncrementBtn}
                        <li>
                            <button onClick={handleNextbtn}>Next</button>
                        </li>
                    </>
                    ) : (
                        <>
                            <li>
                                <button onClick={handlePrevbtn}>Prev</button>
                            </li>
                                {pagesDecrementBtn}
                                {renderPageNumbers}
                                {pagesIncrementBtn}
                            <li>
                                <button onClick={handleNextbtn}>Next</button>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
    )
}

export default Paginations;
