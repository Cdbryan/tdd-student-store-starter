import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import DetailedCard from "../DetailedCard/DetailedCard";


export default function ProductDetail({products}) {
  const {productId} = useParams(); 
  
  console.log("products in product detail: " , products)
  return(
    <div className="Product Detail">
      <Navbar />
      <Sidebar />
      <DetailedCard products={products} productId={productId} />
    </div>
)}
