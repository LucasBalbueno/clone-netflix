import { useNavigate } from "react-router-dom";
import { Button } from "./style";

export const ButtonLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/auth')
    }

    return (
        <Button onClick={handleLogout}>Sair</Button>
    )
}