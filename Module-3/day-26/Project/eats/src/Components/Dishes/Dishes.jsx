// import PropTypes from "prop-types";
import "./Dishes.css";

function Dishes({ name, price, spicy }) {
  return (
    <div className="dish">
      <h3>{name}</h3>
      <p>{price} ETB</p>
      {spicy && "🌶🌶🌶 ፕፕሬ"}
    </div>
  );
}

// Dish.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   spicy: PropTypes.bool, // optional
// };

// used with attributes:

export default Dishes;
