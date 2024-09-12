import { Container, LinkCategory } from './style'

import Logo from '../../assets/images/logo.png'
import Profile from '../../assets/images/profileRed.png';

export const HeaderMovies = () => {
    return(
        <>
            <Container>
                    <div className='LogoCategorys'>
                        <img src={Logo} alt="Logo Netflix" />
                        <ul>
                            <li>
                                <LinkCategory to={'/movies'}>Início</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory to={'comedy'}>Comédia</LinkCategory>
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
            </Container>
        </>
    )
}