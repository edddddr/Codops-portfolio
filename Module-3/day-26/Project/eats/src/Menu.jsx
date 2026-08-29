import Dish from "./Components/Dishes/Dishes.jsx";

const menu = [
  { id: 1, name: "Doro Wat", price: 240 },
  { id: 2, name: "Shiro", price: 120 },
  { id: 3, name: "Tibs", price: 280 },
];

function Menu() {
  const [total, setTotal] = useState(0);
  function addToOrder(price) {
    setTotal(total + price);
  }

  return (
    <>
      {menu.map((d) => (
        <>
          <Dish key={d.id} name={d.name} price={d.price} />
          <button key={d.id} onClick={() => addToOrder(d.price)}>
            {d.name} — {d.price} ETB
          </button>
        </>
      ))}
    </>
  );
}

export default Menu;
