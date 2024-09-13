const apiKey = '257f9b256bd6d93fb3fdcd24a7811d39';
const baseURL = 'https://api.themoviedb.org/3';

export const getTopRatedMovies = async () => {
    const URL = `${baseURL}/movie/top_rated?api_key=${apiKey}`;

    try {
        const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('RESPOSTA DA REQUISIÇÃO NÃO FOI OK!');
            }
            const data = await response.json();

            // console.log(data.results);

            return data.results;
        } catch (error) {
            console.error('HÁ UM PROBLEMA NESSA REQUISIÇÃO:', error);
    }
}

export const getMoviesByGenre = async (genreId) => {
    const URL = `${baseURL}/discover/movie?with_genres=${genreId}&api_key=${apiKey}`;

    try {
        const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('RESPOSTA DA REQUISIÇÃO NÃO FOI OK!');
            }
            const data = await response.json();

            // console.log(data.results);

            return data;
        } catch (error) {
            console.error('HÁ UM PROBLEMA NESSA REQUISIÇÃO:', error);
    }
}

export const getGenres = async () => {
    const URL = `${baseURL}/genre/movie/list?api_key=${apiKey}`;

    try {
        const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('RESPOSTA DA REQUISIÇÃO NÃO FOI OK!');
            }
            const data = await response.json();

            // console.log(data.genres);

            return data.genres;
        } catch (error) {
            console.error('HÁ UM PROBLEMA NESSA REQUISIÇÃO:', error);
    }
}

export const SearchService = async (query) => {
    const URL = `${baseURL}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('RESPOSTA DA REQUISIÇÃO NÃO FOI OK!')
        }
        const data = await response.json();

        console.log(data.results);

        return data.results;
    } catch (error) {
        console.error('HÁ UM PROBLEMA NESSA REQUISIÇÃO:', error);
    }
}

export const getMovieDetails = async (id) => {
    const URL = `${baseURL}/movie/${id}?api_key=${apiKey}&language=pt-BR`

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('RESPOSTA DA REQUISIÇÃO NÃO FOI OK!')
        }
        const data = await response.json();

        // console.log(data);

        return data;
    } catch (error) {
        console.error('HÁ UM PROBLEMA NESSA REQUISIÇÃO:', error);
    }
}

export const getElencoMovie = async (id) => {
    const URL = `${baseURL}/movie/${id}/credits?api_key=${apiKey}&language=pt-BR`

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('RESPOSTA DA REQUISIÇÃO NÃO FOI OK!')
        }
        const data = await response.json();

        // console.log(data.cast);

        return data.cast;
    } catch (error) {
        console.error('HÁ UM PROBLEMA NESSA REQUISIÇÃO:', error);
    }
}