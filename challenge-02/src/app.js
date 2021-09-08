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
  return (
  <div className='wrapper'>
    <Header />
    <Menu />
    <div className='content'>
      <Sidebar data={teams} />
      <Main />
    </div>
    <Footer />
  </div>
  );
}
