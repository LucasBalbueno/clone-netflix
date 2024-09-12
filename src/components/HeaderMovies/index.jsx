import { Container, LinkCategory, ButtonSearch } from './style'

import Logo from '../../assets/images/logo.png'
import Profile from '../../assets/images/profileRed.png';

import { ButtonLogout } from '../ButtonLogout';

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
                                <LinkCategory to={'romance'}>Romance</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory to={'action'}>Ação</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory to={'horror'}>Terror</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory to={'thriller'}>Suspense</LinkCategory>
                            </li>
                            <li>
                                <LinkCategory to={'drama'}>Drama</LinkCategory>
                            </li>
                        </ul>
                    </div>

                    <div className='SearchProfile'>
                    <div className='SearchBar'>
                        <input id='searchInput' type="search" />
                        <ButtonSearch id='searchButton' to={'search'}>Buscar</ButtonSearch>
                    </div>
                    <img src={Profile} alt="Imagem Profile Red" />
                    <ButtonLogout />
                </div>
            </Container>
        </>
    )
}