import { Container } from './style';

export function ButtonText({ title, isActive = false, ...rest }) {//o rest pega o restante de propriedades que a gente passar para o ButtonText
  return (
    <Container type='button' isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}