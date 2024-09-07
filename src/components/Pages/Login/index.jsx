import { Container, HeaderLogin, ContainerLogin, Forms } from "./style";

import Logo from '../../../assets/images/logo.png';

import { Input } from "../../Input";
import { ButtonLogin } from '../../ButtonLogin';
import { Footer } from "../../Footer";

export const Login = () => {
    return (
        <>
            <Container>
                <HeaderLogin>
                    <img src={Logo} alt="Logo Netflix" />
                </HeaderLogin>
                <ContainerLogin>
                    <Forms>
                        <h2>Entrar</h2>
                        <div className="containerInputs">
                            <Input type={'email'} name={'emailLogin'} placeholderText={'Email ou número de celular'} width={'65%'} />
                            <Input type={'password'} name={'passwordLogin'} placeholderText={'Senha'} width={'65%'} />
                            <ButtonLogin text={'Entrar'} width={'65%'} />
                            <span>OU</span>
                            <button className="ButtonCode">Usar um código de acesso</button>
                            <a href="#">Esqueceu a senha?</a>
                        </div>
                            
                            <div className="chekboxInput">
                                <input type="checkbox" />
                                <label>Lembre-se de mim</label>
                            </div>

                            <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
                    </Forms>
                </ContainerLogin>
                <Footer />
            </Container>
        </>
    )
}