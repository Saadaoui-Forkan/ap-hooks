import React, { useState } from "react";
import AddProduct from "./AddProduct";
import StarRating from "./StarRating";
import { Alert } from "react-bootstrap";

function Products({ data, addNewProduct }) {
  const [warning, setWarning] = useState(false);

  const handleAdd = (product) => {
    const isValid = product.title && product.url && product.description && product.price;
    if (!isValid) return setWarning(true);

    setWarning(false);
    addNewProduct(product);
  };

  return (
    <div>
      {warning && <Alert variant="danger">Please fill all fields.</Alert>}

      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="border p-2 rounded">
              <h5 className="text-center">{product.title}</h5>
              <img src={product.url} alt={product.title} className="img-fluid mb-2" />
              <p>{product.description}</p>
              <h6>{product.price}</h6>
              <StarRating rating={product.rating} />
            </div>
          </div>
        ))}
      </div>

      <AddProduct onAdd={handleAdd} />
    </div>
  );
}

export default Products;