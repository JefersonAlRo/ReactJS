import { Container } from "./style";

export function Input({ icon: Icon, ...rest }) {//o icon:Icon serve para manter a regra que todo componente tem que ter I maiúsculo

  return (//o && só mostrará o icone caso ele exista
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )


}