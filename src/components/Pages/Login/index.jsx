import { Container, HeaderLogin, ContainerLogin, Forms } from "./style";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../../assets/images/logo.png';
import { Input } from "../../Input";
import { Footer } from "../../Footer";
import { ErrorMessage } from "../../ErrorMessage";

export const Login = () => {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);

    const handleLogin = () => {
        if (email === 'admin' && password === '123') {
            navigate('/movies');
            localStorage.setItem('auth', 'true');
            setError(false);
        } else {
            setError(true);
        }
    }

    return (
        <>
            {error && <ErrorMessage message="Credenciais inválidas! Tente novamente usando outras informações" />}
            <Container>
                <HeaderLogin>
                    <img src={Logo} alt="Logo Netflix" />
                </HeaderLogin>
                <ContainerLogin>
                    <Forms>
                        <h2>Entrar</h2>
                        <div className="containerInputs">
                                <Input
                                    type="text"
                                    name="emailLogin"
                                    placeholderText="Email ou número de celular"
                                    width="65%"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    type="password"
                                    name="passwordLogin"
                                    placeholderText="Senha"
                                    width="65%"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            <button className="buttonLogin" onClick={handleLogin}>Entrar</button>
                            <span>OU</span>
                            <button className="ButtonCode">Usar um código de acesso</button>
                            <a className="linkForgetPassword" href="#">Esqueceu a senha?</a>
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