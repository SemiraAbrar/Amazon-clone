import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from '../../Utility/Firebase'
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length);
  const totalItem = basket?.reduce((amount,item) => {
    // console.log(amount);
    // console.log(item);

    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            <div className={classes.logo__container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>

              <div className={classes.delivery}>
                {" "}
                <span>
                  <HiOutlineLocationMarker />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              <IoSearchSharp size={38} />
            </div>

            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/383px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt="american flag"
                />
                <select>
                  <option value="">En</option>
                </select>
              </Link>

              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello,sign In</p>

                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
              </Link>
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BsCart2 size={30} />
                <span className={classes.cart__span}>{totalItem}</span>
                <span>cart</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
