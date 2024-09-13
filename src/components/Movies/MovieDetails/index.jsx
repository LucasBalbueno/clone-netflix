import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails, getElencoMovie } from "../../../services/MoviesService";

import { MovieContainer } from '../styles/style';

export const MovieDetails = () => {
    const { id } = useParams();
    const [ movie, setMovie ] = useState({});
    const [ elencoList, setElenco ] = useState([]);
    
    useEffect(() => {
        try {
            const handleDetails = async () => {
                const movieDetails = await getMovieDetails(id);
                setMovie(movieDetails);
            }

            handleDetails()
        } catch (error) {
            console.error('ERRO AO BUSCAR O DETALHES DO FILME', error)
        }
    }, [id])
    
    useEffect(() => {
        try {
            const handleElenco = async () => {
                const elencoDetails = await getElencoMovie(id);
                setElenco(elencoDetails);
            }
            
            handleElenco()
        } catch (error) {
            console.error('ERRO AO BUSCAR O DETALHES DO ELENCO', error)
        }
    }, [id])

    const formattedReleaseDate = movie.release_date ? movie.release_date.replace(/-/g, '/') : '';
       
    return (
        <MovieContainer>
            <div className="filmeDetails">
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Poster do filme" />
                <div className="DetailsText">
                    <h3>{movie.original_title}</h3>
                    <div className="NoteData">
                        <div className="NotePopularity">
                            <span>{parseFloat(movie.vote_average).toFixed(1)}</span>
                            <span>{parseFloat(movie.popularity).toFixed(0)}</span>
                        </div>
                        <p>{`Data de lançamento: ${formattedReleaseDate}`}</p>
                    </div>
                    <p>{movie.overview}</p>
                </div>
            </div>

            <div className="elencoDetails">
                {
                    elencoList.slice(0, 10).map((actor) => (
                        <div key={actor.id} className="elencoCard">
                            <img src={'https://image.tmdb.org/t/p/w500' + actor.profile_path} alt="" />
                            <h4>{actor.name}</h4>
                            <h5>{actor.character}</h5>
                        </div>
                    ))
                }
            </div>
        </MovieContainer>
    );
};