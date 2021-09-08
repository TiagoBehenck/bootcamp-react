import { useEffect, useState } from 'react';
import { 
  Header,
  Menu,
  Sidebar,
  Main,
  Footer,
  H2,
} from './components'
import './style.css'

const teams = [ 
  { 
    id: 1,
    title: 'Atlético-MG',
    content: <H2>A. Stival</H2>,
  },
  { 
    id: 2,
    title: 'Palmeiras',
    content: <H2>Abel Fernando</H2>,
  },
  { 
    id: 3,
    title: 'Fortaleza',
    content: <H2>Juan Pablo Vojvoda</H2>,
  },
  { 
    id: 4,
    title: 'Bragantino',
    content: <H2>Maurício Nogueira Barbieri</H2>,
  },

]

export function App() {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  useEffect(() => { 
    setTitle(teams[0].title)
    setContent(teams[0].content)
  }, [])

  return (
  <div className='wrapper'>
    <Header />
    <Menu />
    <div className='content'>
      <Sidebar 
        data={teams}
        onChangeTitle={setTitle}
        onChangeContent={setContent}
      />
      <Main 
        title={title}
        content={content}
      />
    </div>
    <Footer />
  </div>
  );
}
