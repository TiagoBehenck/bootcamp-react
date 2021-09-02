import { 
  Header,
  Menu,
  Sidebar,
  Main,
  Footer,
} from './components'
import './style.css'

export function App() {
  return (
  <div className='wrapper'>
    <Header />
    <Menu />
    <div className='content'>
      <Sidebar />
      <Main />
    </div>
    <Footer />
  </div>
  );
}
