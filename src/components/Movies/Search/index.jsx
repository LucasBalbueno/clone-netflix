import { useState, useEffect } from "react";
import { Container, CardMovie, LinkMovieDetails, TextNotFound } from '../styles/style';
import { SearchService, getGenres } from "../../../services/MoviesService";

export const Search = () => {
    const [ moviesList, setMoviesList ] = useState([]);
    const [ genresList, setGenresList ] = useState([]);

    useEffect(() => {
        const handleButtonClick = async () => {
            const searchInput = document.getElementById('searchInput').value;

            try {
                const movies = await SearchService(searchInput);
                setMoviesList(movies);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error)
            }
        };
        
        const searchButton = document.getElementById('searchButton');
        searchButton.addEventListener('click', handleButtonClick);

        return () => {
            searchButton.removeEventListener('click', handleButtonClick);
        };
    }, [moviesList]);

    // useEffect(() => {
    //     console.log(moviesList);
    // }, [moviesList]);

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

    // console.log(moviesList.length)

    return (
        <>
            <Container>
            {moviesList.length === 0 ? (
                    // <TextNotFound>Filme não encontrado. Procure por outro título!</TextNotFound>
                    <TextNotFound></TextNotFound>
                ) : (
                    moviesList
                    .filter((filme) => filme.poster_path !== null)
                    .map((filme) => (
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
                    ))
            )}
            </Container>
        </>
    )
}