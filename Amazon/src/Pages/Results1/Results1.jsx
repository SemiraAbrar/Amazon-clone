import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "./Results1.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import { producturl1 } from "../../Api/endpoints";
import Loader from "../Loader/Loader";
function Results1() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  console.log(categoryName);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${producturl1}/products`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "20px" }}>Results</h1>
        <p style={{ padding: "10px" }}>category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                descr={false}
                add={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results1;
