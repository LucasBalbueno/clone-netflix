import { Container, HeaderMovies, LinkCategory } from './style';

import Logo from '../../../assets/images/logo.png'
import Profile from '../../../assets/images/profileRed.png';

export const HomeMovies = () => {
    // const ratedMovies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=257f9b256bd6d93fb3fdcd24a7811d39';
    // const URL = 'https://api.themoviedb.org/3/257f9b256bd6d93fb3fdcd24a7811d39'

    // const getItem = async () => {
    //     try {
    //         const response = await fetch(URL);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //         return data;
    //     } catch (error) {
    //         console.error('There has been a problem with your fetch operation:', error);
    //     }
    // };

    // Chamar a função para testar
    // getItem();

    return(
        <>
            <Container>
                <HeaderMovies>
                    <div className='LogoCategorys'>
                        <img src={Logo} alt="Logo Netflix" />
                        <ul>
                            <li>
                                <LinkCategory>Início</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory>Comédia</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory>Romance</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory>Ação</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory>Terror</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory>Suspense</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory>Drama</LinkCategory>
                            </li>
                        </ul>
                    </div>

                    <div className='SearchProfile'>
                        <div className='SearchBar'>
                            <input type="search" />
                            <button>Buscar</button>
                        </div>
                        <img src={Profile} alt="Imagem Profile Red" />
                        <button>Sair</button>
                    </div>

                </HeaderMovies>
            </Container>
        </>
    )
}