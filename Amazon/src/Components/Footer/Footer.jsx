import classes from "./Footer.module.css";
function Footer() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className={classes.back_to_top}>
        <a href="#top" onClick={scrollToTop}>
          Back to top
        </a>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.upper_link}>
          <div>
            <h4>Get to Know Us</h4>
            <ul>
              <li>Careers</li>
              <li> Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations </li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div>
            <h4> Make Money with Us</h4>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>›See More Make Money with Us</li>
            </ul>
          </div>
          <div>
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li> Amazon Currency Converter</li>
            </ul>
          </div>
          <div>
            <h4> Let Us Help You</h4>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders </li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li> Manage Your Content and Devices</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className={classes.lower_wrapper}>
          <div className={classes.lower_link}>
            <li> Conditions of Use</li>
            <li>Privacy Notice </li>
            <li> Consumer Health Data Privacy Disclosure</li>
            <li>Your Ads Privacy Choices✔❌</li>
          </div>
          <div className={classes.small}>
            <small>© 1996-2024, Amazon.com, Inc. or its affiliates</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
