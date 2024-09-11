import { Container, HeaderMovies, LinkCategory } from './style';

import Logo from '../../../assets/images/logo.png'
import Profile from '../../../assets/images/profileRed.png';

import { Movies } from '../../Movies';

export const HomeMovies = () => {

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

                <Movies />
            </Container>
        </>
    )
}