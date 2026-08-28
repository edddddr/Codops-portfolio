import "./SideBar.css";
import Dishes from "./../../Dishes/Dishes.jsx";

const dishes = [
  { id: 1, name: "Tibs", price: 200, veg: false },
  { id: 2, name: "Shiro", price: 120, veg: true },
  { id: 3, name: "Misir", price: 110, veg: true },
];

function SideBar() {
  return (
    <section className="bg">
      {dishes.map((d) => (
        <Dishes key={d.id} name={d.name} price={d.price} spicy={d.veg} />
      ))}
    </section>
  );
}

export default SideBar;
