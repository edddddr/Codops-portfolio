import { useState } from "react";
import "./Menu.css";
import Dishes from "./../../Dishes/Dishes.jsx";
import CategoryBar from "../../CategoryBar/CategoryBar.jsx";

function Menu({ dishes }) {
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("All");

  function addToOrder(price) {
    setTotal(total + price);
  }

  const shown =
    category === "All" ? dishes : dishes.filter((d) => d.category === category);

  if (shown.length === 0) return <p>No {category} dishes.</p>;

  return (
    <section className="bg">
      <div>
        <CategoryBar selected={category} onSelect={setCategory} />
      </div>

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
