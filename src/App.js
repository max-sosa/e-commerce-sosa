import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
