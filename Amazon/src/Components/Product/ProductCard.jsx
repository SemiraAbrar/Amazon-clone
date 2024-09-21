import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { DataContext } from '../DataProvider/DataProvider';
import {Type} from '../../Utility/actiontype'

function ProductCard({ product, flex, descr, add, slicetitle }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      {" "}
      <div className={classes.img_container}>
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className={classes.lower_container}>
        <h3 className={`${classes.title}`}>
          {slicetitle && title?.length > 55
            ? title.slice(0, 55) + "..."
            : title}
        </h3>
        {descr && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating readOnly value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {add && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard