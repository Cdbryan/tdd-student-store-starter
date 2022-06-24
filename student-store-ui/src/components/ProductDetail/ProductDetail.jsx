import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import axios from 'axios';

export default function ProductDetail({
  handleAddItemtoCart,
  handleRemoveItemToCart,
}) {
  const [product, setProduct] = React.useState("");
  let paramObj = useParams("/store/:productId");
  const { productId } = paramObj;

  //put this inside useEffect
  React.useEffect(() => {
    function getData() {
      axios
        .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
        .then((productData) => {
          console.log(productData);
          let data = productData.data.products;
          console.log(data);
          setProduct(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <div className="Product Detail">
      <p> Product Detail </p>
      <Navbar />
      <Sidebar />
    </div>
  );
}
