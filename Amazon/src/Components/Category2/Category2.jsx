import React from 'react'
import {category2Info} from './Category2Info'
import Category2Card from './Category2Card';
import classes from './Category2.module.css'
function Category2() {
  return (
    <section className={classes.category2__container}>
      {category2Info.map((info) => (
        <Category2Card data={info} />
      ))}
    </section>
  );
}

export default Category2