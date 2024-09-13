import { useEffect, useState } from 'react';
import { Container, CardMovie, LinkMovieDetails } from '../styles/style'

import { getTopRatedMovies } from '../../../services/MoviesService';

import { getGenres } from '../../../services/MoviesService';

export const InitialMovies = () => {
    const [ filmesList, setFilmesList ] = useState([]);
    const [ genresList, setGenresList ] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const movies = await getTopRatedMovies();
            setFilmesList(movies);
        };
        fetchTopRatedMovies();
    }, []);

    useEffect(() => {
        const fetchGenresId = async () => {
            const movies = await getGenres();
            setGenresList(movies);
        };
        fetchGenresId();
    }, []);

    const getNameId = (id) => {
        let genreName = '';
        genresList.map((genre) => {
            if (genre.id === id) {
                genreName = genre.name
            }
        })
        return (genreName)
    }

    return (
        <>
            <Container>
                {filmesList.map((filme) => (
                    <CardMovie key={filme.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={filme.title} />
                    <div className="infos">
                        <h3>{filme.title}</h3>

                        <div className='textNote'>
                            <p>{parseFloat(filme.vote_average).toFixed(1)}</p>
                        </div>

                        <div className='genresTags'>
                            {filme.genre_ids[0] && <span>{getNameId(filme.genre_ids[0])}</span>}
                            {filme.genre_ids[1] && <span>{getNameId(filme.genre_ids[1])}</span>}
                        </div>

                        <LinkMovieDetails to={`movie/${filme.id}`}>Ver detalhes</LinkMovieDetails>
                    </div>
                    </CardMovie>
                ))}
            </Container>
        </>
    )
}