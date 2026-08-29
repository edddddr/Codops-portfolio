// import PropTypes from "prop-types";
import "./Dishes.css";
// import PropTypes from "prop-types";

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

export default Dishes;
