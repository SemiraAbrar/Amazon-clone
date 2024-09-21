import React from 'react'
import classes from './Category.module.css'
function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h3 className={classes.title}>{data.name}</h3>
        </span>
        <div className="">
        
          <div className={`${classes.imgs}`}>
            <div>
              {" "}
              <img src={data.imgLink.l1} alt="" />
              <h5>{data.itemName.l1}</h5>
            </div>
            <div>
              {" "}
              <img src={data.imgLink.l2} alt="" />
              <h5>{data.itemName.l2}</h5>
            </div>
          </div>
          <div className={classes.imgs}>
            <div>
              {" "}
              <img src={data.imgLink.l3} alt="" />
              <h5 >{data.itemName.l3}</h5>
            </div>
            <div>
              {" "}
              <img src={data.imgLink.l4} alt="" />
              <h5 >{data.itemName.l4}</h5>
            </div>
          </div>

          <p className="">shop now</p>
        </div>
      </a>
    </div>
  );
}

export default CategoryCard