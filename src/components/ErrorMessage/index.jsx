import { Container } from "./style";

export const ErrorMessage = ({message}) => {
    return(
        <Container>
            <div>
                <p>{message}</p>
            </div>
        </Container>
    )
}