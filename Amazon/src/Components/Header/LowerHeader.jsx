import { LuMenu } from "react-icons/lu";
import classes from './Header.module.css'
function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <LuMenu />
          <p className="pt-3">All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registy</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
      <ul>
        <li>Shop the Gaming store</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
