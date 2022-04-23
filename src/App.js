import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome" component={Welcome} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
