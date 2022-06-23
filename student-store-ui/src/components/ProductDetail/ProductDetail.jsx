import * as React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function ProductDetail() {
  const [product, setProduct] = React.useState("");
  return (
    <div className="Product Detail">
      <p> Product Detail </p>
      <Navbar />
      <Sidebar />
    </div>
  );
}
