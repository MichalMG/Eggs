import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './scss/style.scss';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Company from './Pages/Company/Company';
import Offer from './Pages/Offer/Offer';
import Boxes from './Pages/Boxes/Boxes';
import OrdersBoxes from './Pages/OrdersBoxes/OrdersBoxes.js';
import Contact from './Pages/Contact/Contact';

function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/ordersandboxes' component={OrdersBoxes} />
          <Route path='/boxes' component={Boxes} />
          <Route path='/company' component={Company} />
          <Route path='/offer' component={Offer} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;