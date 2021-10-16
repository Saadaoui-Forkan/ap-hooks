import React,{useState} from 'react'


function AddProduct({addNewProd }) {

    const  [addProd, setAddProd] = useState(
        {
            url:'',
            title:'',
            des:'',
            prix:''
        }
    );

    const handleChange = (e) => {
        
        setAddProd ({
            ...addProd, [e.target.id] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewProd(addProd)
        setAddProd('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                id='title'
                value={addProd.title}
                placeholder="title"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                id="url"
                value={addProd.url} 
                placeholder="url"
                onChange={handleChange}
                />
                <br/>
                <input
                type="text"
                id="des"
                value={addProd.des}  
                placeholder="des"
                onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                id="prix"
                value={addProd.prix}  
                placeholder="prix"
                onChange={handleChange}
                />
                <br/>

                <input type="submit" value='Add'/>

            </form>
            
        </div>
    )
}

export default AddProduct
