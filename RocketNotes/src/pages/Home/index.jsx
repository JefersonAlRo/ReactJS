import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';

export function Home() {

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>

        <li><ButtonText title='Todos' isActive /></li>
        <li><ButtonText title='React' /></li>
        <li><ButtonText title='NodeJS' /></li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title='minhas notas'>
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        <p>Criar nota</p>
      </NewNote>

    </Container>
  )


}