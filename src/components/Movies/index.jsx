import { useEffect, useState } from 'react';
import { Container, CardMovie } from './style'

import { getTopRatedMovies } from '../../services/MoviesService';
// import { getMoviesByGenre } from '../../services/MoviesService';

import { getGenres } from '../../services/MoviesService';

export const Movies = () => {
    const [ filmesArr, setFilmesArr ] = useState([]);
    const [ GenresArr, setGenresArr ] = useState([])

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const movies = await getTopRatedMovies();
            setFilmesArr(movies);
        };
        fetchTopRatedMovies();
    }, []);

    useEffect(() => {
        const fetchGenresId = async () => {
            const movies = await getGenres();
            setGenresArr(movies);
        };
        fetchGenresId();
    }, []);

    const getNameId = (id) => {
        let genreName = '';
        GenresArr.map((genre) => {
            if (genre.id === id) {
                genreName = genre.name
            }
        })
        return (genreName)
    }

    // console.log(filmesArr[0])

    return (
        <>
            <Container>
                {filmesArr.map((filme) => (
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