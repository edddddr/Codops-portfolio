import { useState } from "react";
import "./Menu.css";
import Dishes from "./../../Dishes/Dishes.jsx";

function Menu({ dishes, category }) {
  const [total, setTotal] = useState(0);
  function addToOrder(price) {
    setTotal(total + price);
  }

  const shown = dishes.filter((d) => d.category === category);

  if (shown.length === 0) return <p>No {category} dishes.</p>;

  return (
    <section className="bg">
      {shown.map((d) => (
        <div key={d.id}>
          <Dishes key={d.id} name={d.name} price={d.price} spicy={d.veg} />
          <button key={d.id} onClick={() => addToOrder(d.price)}>
            {d.name} — {d.price} ETB
          </button>
        </div>
      ))}

      <h1>{total}</h1>
    </section>
  );
}

export default Menu;
