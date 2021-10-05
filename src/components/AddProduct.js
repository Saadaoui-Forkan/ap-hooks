import React,{useState} from 'react'
import {products} from './ProductsList'

function AddProduct({addNewProd,products}) {

    const  [addProd, setAddProd] = useState(
        {
            url:'',
            title:'',
            des:'',
            prix:''
        }
    );

    const handleChange = (e) => {
        setAddProd(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = () => {
        console.log('ok')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={addProd.title}
                placeholder="title"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                value={addProd.url} 
                placeholder="url"
                onChange={handleChange}
                />
                <br/>
                <input
                type="text"
                value={addProd.des}  
                placeholder="des"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                value={addProd.price}  
                placeholder="price"
                onChange={handleChange}
                />
                <br/>

                <input type="submit" value='Add'/>

            </form>
            
        </div>
    )
}

export default AddProduct
