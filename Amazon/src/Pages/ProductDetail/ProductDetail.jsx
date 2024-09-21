import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endpoints";
import Loader from "../Loader/Loader"
import ProductCard from "../../Components/Product/ProductCard";
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading,setIsLoading]=useState(false);
  useEffect(() => {
     setIsLoading(true)
    axios.get(`${producturl}/products/${productId}`)
    .then((res) => {
      console.log(res.data);
      setProduct(res.data)
       setIsLoading(false);
    }).catch((err)=>{
        console.log(err);
        setIsLoading(false)
    })
  },[]);
  return (
    <Layout>
      <div className={classes["detail-container"]}>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCard
            product={product}
            flex={true}
            descr={true}
            add={true}
            slicetitle={false}
          />
        )}
      </div>
    </Layout>
  );
}

export default ProductDetail;
