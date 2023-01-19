import { Container } from "./styles";

export function Button({ title, loading = false, ...rest }) {

  return (//o props muda as propriedades do item, {title} funciona igualmente o props
    <Container
      type='button'
      disabled={loading}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  );
}