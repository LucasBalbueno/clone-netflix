import { Container } from './style';
import { Outlet } from 'react-router-dom';

import { HeaderMovies } from '../../HeaderMovies';
import { Footer } from '../../Footer';

// import { Movies } from '../../Movies/Initial';
// import { Comedy } from '../../Movies/Comedy';


export const HomeMovies = () => {

    return(
        <>
            <Container>
                <HeaderMovies />

                <Outlet />
                
                <Footer />
            </Container>
        </>
    )
}