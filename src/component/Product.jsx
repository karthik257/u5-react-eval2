import React, { useState, useEffect } from "react";
import ProductInput from "./ProductInput";
import ProductList from "./ProductList";

function Product() {
  const [data, setData] = useState({});
  const [product, setProduct] = useState([]);
  const [pagenum, setPagenum] = useState(1);

  const handleData = (e) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let _data = {
      title: data.title,
      cost: data.cost,
      image: data.image,
      category: data.category,
    };

    fetch("http://localhost:8000/posts", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => show())
      .catch((err) => console.log(err));
  };

  const show = () => {
    fetch(`http://localhost:8000/posts?_page=${pagenum}&_limit=5`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrev = () => {
    setPagenum(pagenum - 1);
  };
  const handleNext = () => {
    setPagenum(pagenum + 1);
  };

  const handleFilter = (ind) => {
    const temp = product.filter((elem) => {
      return elem.category === ind;
    });
    setProduct([...temp]);
  };

  useEffect(() => {
    show();
  }, [pagenum]);

  return (
    <>
      <ProductInput
        data={data}
        handleData={handleData}
        handleSubmit={handleSubmit}
      />
      <div>
        <button onClick={() => handleFilter("vegetables")}>
          Show Vegetable
        </button>
        <button onClick={() => handleFilter("fruits")}>Show Fruit</button>
        <button onClick={() => handleFilter("provisions")}>
          Show Provision
        </button>
      </div>
      <ProductList product={product} />
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default Product;
