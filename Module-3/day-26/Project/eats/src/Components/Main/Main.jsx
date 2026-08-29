import Sidebar from "./Sidebar/Sidebar.jsx";
import Menu from "./Menu/Menu.jsx";
import "./Main.css";

const dishes = [
  { id: 1, name: "Tibs", price: 200, category: "Main", veg: false },
  { id: 2, name: "Shiro", price: 120, category: "Vegan", veg: true },
  { id: 3, name: "Bergur", price: 110, category: "Grill", veg: true },
];

function Main() {
  return (
    <section className="main">
      <Sidebar />
      <Menu dishes={dishes} category={"habeshan"} />
    </section>
  );
}

export default Main;
