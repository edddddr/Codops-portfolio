import "./Dishes.css";

function Dishes({ name, price }) {
  return (
    <div className="dish">
      <h3>{name}</h3>
      <p>{price} ETB</p>
    </div>
  );
}
// used with attributes:

export default Dishes;
