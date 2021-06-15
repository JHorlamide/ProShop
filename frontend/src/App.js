/* Custom Component */
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HomeScreen from './components/screens/HomeScreen';

/* React Bootstrap */
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to ProShop</h1>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
