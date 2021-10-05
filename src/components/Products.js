import React, {useState} from 'react'
import {products} from './ProductsList'
import AddProduct from './AddProduct'
import StarRating from './StarRating'

import { v4 as uuidv4 } from 'uuid';
// import { Alert } from 'react-bootstrap';

function Products() {

    let [products, setProducts] = useState(products);
    const addNewProd = (newProd) => {setProducts([...products, 
                    {
                            id: uuidv4(),
                            url:newProd.url,
                            title:newProd.title,
                            des:newProd.des,
                            prix:newProd.prix
                    }])
        }

    return (
        <div>
            <div className="row">
            
            {    
                products.map((product)=> (
                    
                    <div key={product.id} className='col-3 productItem'>
                        
                        <h3 style={{textAlign:"center",fontSize:19}}>{product.title}</h3>
                        <img src={product.url} alt='' width='200px' height='100px'></img>
                        <p style={{fontSize:15}}>{product.des}</p>
                        <h4 style={{fontSize:17}}>{product.prix}</h4>

                        <StarRating />
                        
                    </div>    
                ))    
            }
           

            </div>

            <AddProduct addNewProd={addNewProd}/>    

        </div>
    )
}

export default Products
