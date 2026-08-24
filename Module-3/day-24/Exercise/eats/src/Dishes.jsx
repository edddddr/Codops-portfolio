function Dish(props) {
  return (
    <div className="dish">
      <h3>{props.name}</h3>
      <p>{props.price} ETB</p>
    </div>
  );
}
// used with attributes:

export default Dish;
