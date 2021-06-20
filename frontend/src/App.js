/* Custom Component */
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductDetailsScreen';
import CartScreen from './components/screens/CartScreen';

/* React Bootstrap */
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' exact component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
