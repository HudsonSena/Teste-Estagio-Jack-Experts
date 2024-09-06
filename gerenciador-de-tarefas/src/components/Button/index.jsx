import { Container } from './styles';

export function Button({ value, ...rest }) {
    return (
        <Container type="button" {...rest}>
            {value}
        </Container>
    )

}