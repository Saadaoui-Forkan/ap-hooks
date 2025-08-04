import React, { useState } from "react";

function AddProduct({ onAdd }) {
  const [form, setForm] = useState({
    url: "",
    title: "",
    description: "",
    price: "",
  });

  const [warning, setWarning] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, url, description, price } = form;

    if (!title || !url || !description || !price) {
      setWarning(true);
      return;
    }

    setWarning(false);
    onAdd(form);
    setForm({ url: "", title: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      {warning && (
        <div className="alert alert-danger">Please fill all fields.</div>
      )}

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="form-control mb-2"
      />
      <input
        name="url"
        value={form.url}
        onChange={handleChange}
        placeholder="Image URL"
        className="form-control mb-2"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="form-control mb-2"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary w-100">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;
