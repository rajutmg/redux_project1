import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProduct } from "../redux/actions/productActions";
import ProductComponen from "./ProductComponen";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  //   console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    // console.log(response.data);
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);
  return (
    <div className="ui grid container">
      <ProductComponen />
    </div>
  );
};

export default ProductListing;
