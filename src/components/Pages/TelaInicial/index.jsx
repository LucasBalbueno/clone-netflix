import { Container, HeaderPaginaInicial, Content } from "./style";

import Logo from '../../../assets/images/logo.png';
import Translator from '../../../assets/images/translate.png'

import { Input } from "../../Input";
import { ButtonLogin } from '../../ButtonLogin';
import { Footer } from "../../Footer";

export const TelaInicial = () => {
    return(
        <>
            <Container>
                <HeaderPaginaInicial>
                    <img src={Logo} alt="Logo Netflix" />
                    <div className="buttonsHeader">
                        <div className="translatorHeader">
                            <img src={Translator} alt="" />
                            <select>
                                <option value="pt">Português</option>
                            </select>
                        </div>
                        <ButtonLogin text={'Entrar'} />
                    </div>
                </HeaderPaginaInicial>

                <Content>
                    <div className="contentText">
                        <h2>Filmes, séries e muito mais, sem limites</h2>
                        <h3>A partir de R$ 20,90. Cancele quando quiser.</h3>
                        <div>
                            <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                            <div className="containerCadastro">
                                <Input type={'email'} name={'emailCadastro'} placeholderText={'Email'} />
                                <ButtonLogin text={'Vamos lá >'} fontSize={'25px'} width={'20%'} />
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>

            <Footer />
        </>
    )
}