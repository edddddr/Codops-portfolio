import Dish from "./Dishes.jsx";

const menu = [
  { id: 1, name: "Doro Wat", price: 240 },
  { id: 2, name: "Shiro", price: 120 },
  { id: 3, name: "Tibs", price: 280 },
];

function Menu() {
  return (
    <div>
      {menu.map((d) => (
        <Dish key={d.id} name={d.name} price={d.price} />
      ))}
    </div>
  );
}

export default Menu;
