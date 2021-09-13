import { 
  Header,
  Menu,
  Sidebar,
  Main,
  Footer,
} from './components'
import { GlobalStyle } from './style';

export function App() {
  return (
  <>
    <GlobalStyle />
    <div className='wrapper'>
      <Header />
      <Menu />
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  </>
  );
}
