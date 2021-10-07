import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Search from './components/Search'


function App() {
  return (
    <div className="App">
      <Search />
      <Products />
      
    </div>
  );
}

export default App;
