import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const [newProduct, setNewProduct] = useState({
    name: "",
    qty: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3030/products");
        setProducts(response.data);
        console.log(response.data, "showed");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addNewData = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const saveData = () => {
    axios
      .post("http://localhost:3030/products", newProduct)
      .then((response) => {
        console.log("added:", response.data);
      })
      .catch((error) => {
        console.error("bug:", error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3030/products/${id}`)
      .then((response) => {
        console.log(` ${id} deleted `);
        const updatedProducts = products.filter((item) => item.id !== id);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error(`deletederror ${id}:`, error);
      });
  };

  return (
    <div className="products">
      <button
        type="button"
        className="btn-product btn btn-secondary btn-lg btn-block"
        onClick={toggleForm}
      >
        Add New
      </button>

      {products.map((item, id) => (
        <div className=" card-flex" key={id}>
          <ul className="list-group ">
            <li className="list-group-item">Name : {item.name}</li>
            <li className="list-group-item">Id :{item.id} </li>
            <li className="list-group-item">Quantity : {item.qty}</li>
            <button
              className="btn-product btn btn-secondary btn-lg btn-block"
              onClick={() => {
                deleteData(item.id);
              }}
            >
              Delete
            </button>
          </ul>
        </div>
      ))}

      {showForm && (
        <form
          onSubmit={() => {
            saveData();
            toggleForm();
            window.location.reload();
          }}
        >
          <div className="card-flex">
            <ul className="list-group">
              <li className="list-group-item">
                Name :{" "}
                <input
                  type="text"
                  className="name-input"
                  name="name"
                  onChange={addNewData}
                />
              </li>
              <li className="list-group-item">
                Quantity :{" "}
                <input
                  type="number"
                  className="qty-input"
                  name="qty"
                  onChange={addNewData}
                />
              </li>
              <div>
                <button
                  className="btn-product btn btn-secondary btn-lg btn-block delete-btn"
                  onClick={toggleForm}
                >
                  Delete
                </button>
                <input
                  type="submit"
                  value="submit"
                  className="btn-product btn btn-secondary btn-lg btn-block"
                />
              </div>
            </ul>
          </div>
        </form>
      )}
    </div>
  );
};

export default Products;
