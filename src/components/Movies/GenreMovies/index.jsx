import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMoviesByGenre, getGenres } from "../../../services/MoviesService";

import { Container, CardMovie } from '../styles/style';

export const GenreMovies = () => {
    const { genre } = useParams();
    const [ moviesList, setMoviesList ] = useState([]);
    const [ genresList, setGenresList ] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const genreId = getGenreId(genre);
            const movies = await getMoviesByGenre(genreId);
            setMoviesList(movies.results);
        };
        fetchMovies();
    }, [genre]);

    const getGenreId = (genre) => {
        const genreMap = {
            comedy: 35,
            romance: 10749,
            action: 28,
            horror: 27,
            thriller: 53,
            drama: 18
        }
        return genreMap[genre]
    }

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

    moviesList.map((filme) => {
        // console.log(filme.genre_ids[0])
        // console.log(filme.genre_ids[1])
    })

    return (
        <>
            <Container>
                {moviesList.map((filme) => (
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

                        <a href="#">Ver detalhes</a>
                    </div>
                    </CardMovie>
                ))}
            </Container>
        </>
    )
}