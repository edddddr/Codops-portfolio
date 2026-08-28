import "./Menu.css";
import Dishes from "./../../Dishes/Dishes.jsx";

function Menu({ dishes, category }) {
  const shown = dishes.filter((d) => d.category === category);

  if (shown.length === 0) return <p>No {category} dishes.</p>;

  return (
    <section className="bg">
      {shown.map((d) => (
        <Dishes key={d.id} name={d.name} price={d.price} spicy={d.veg} />
      ))}
    </section>
  );
}

export default Menu;
