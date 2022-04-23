import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
      </main>
    </div>
  );
}

export default App;
