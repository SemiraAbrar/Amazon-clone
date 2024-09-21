import React from 'react'
import classes from "./Category2.module.css"
import { Link } from 'react-router-dom';
function Category2Card({data}) {
  console.log(data);
  return (
    <div className={classes.category2}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2 className={classes.title}>{data.title}</h2>
        </span>
        <div  className={classes.imgcontainer}>
          <img src={data.imgLink} alt="" />
        </div>
        <p className="">shop now</p>
      </Link>
    </div>
  );
}

export default Category2Card