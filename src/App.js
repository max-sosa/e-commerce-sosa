import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from './components/context/CartContext';
import Routes from './routes/Routes';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes/>
      </CartProvider> 
    </div>
  );
}

export default App;
