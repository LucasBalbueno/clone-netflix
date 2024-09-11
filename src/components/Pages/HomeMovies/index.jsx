import { Container } from './style';

import { HeaderMovies } from '../../HeaderMovies';
import { Movies } from '../../Movies';
import { Footer } from '../../Footer';

export const HomeMovies = () => {

    return(
        <>
            <Container>
                <HeaderMovies />

                {/* // TROCAR PELO OUTLET */}
                <Movies />
                
                <Footer />
            </Container>
        </>
    )
}