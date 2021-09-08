import { useEffect, useState } from 'react';
import { 
  Header,
  Menu,
  Sidebar,
  Main,
  Footer,
} from './components'
import './style.css'

const teams = [ 
  { 
    id: 1,
    title: 'Atlético-MG',
    content: '<p>A. Stival</p>',
  },
  { 
    id: 2,
    title: 'Palmeiras',
    content: '<p>Abel Fernando</p>',
  },
  { 
    id: 3,
    title: 'Fortaleza',
    content: '<p>Juan Pablo Vojvoda</p>',
  },
  { 
    id: 4,
    title: 'Bragantino',
    content: '<p>Maurício Nogueira Barbieri</p>',
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
      <Sidebar data={teams} />
      <Main 
        title={title}
        content={content}
      />
    </div>
    <Footer />
  </div>
  );
}
