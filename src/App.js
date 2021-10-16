import React, {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Search from './components/Search'
import products from './components/ProductsList'

function App() {
  const [data, setData] = useState(products)
  const [searchItem, setSearchItem] = useState("")

  
  return (
    <div className="App">

      <Search setSearchItem={setSearchItem}/>
      <Products data={data} setData={setData} searchItem={searchItem}/>
      
    </div>
  );
}

export default App;
