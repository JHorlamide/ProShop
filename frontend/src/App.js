/* Custom Component */
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import CartScreen from './components/screens/CartScreen';
import Message from './components/layouts/Message';
import ProductScreen from './components/screens/ProductDetailsScreen';

/* React Bootstrap */
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Message />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} />
          <Route exact path='/' component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
