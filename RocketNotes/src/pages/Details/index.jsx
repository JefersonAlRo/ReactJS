import { Container, Links, Content } from './styles.js';
import { Header } from '../../components/header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
export function Details() {//todo componente deve ter o nome começando com maiúsculo, assim como o nome do arquivo



  return (//será exibido na tela o que está dentro do return
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>
            Introdução ao React
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro illum nobis, quasi dolore voluptate laborum eaque consectetur culpa? Ea cum dolor adipisci? Consectetur consequatur quam aliquam pariatur nobis delectus eveniet?</p>
          <Section title="links úteis">
            <Links>
              <li><a href="#">Link 1</a></li>
              <li>Item 2</li>
              <li>Item 3</li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title='express' />
            <Tag title='nodejs' />
          </Section>
          <Button title='Voltar' />
        </Content>
      </main>
    </Container>
  )//todos os li dentro do Links são children do Links

}//um componente só pode retornar 1 elemento, mas pode ter uma div com outros elementos dentro. Ou utilizar uma fragment, usando colchetes vazios. Fragment nao tem estilização