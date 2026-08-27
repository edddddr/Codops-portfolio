import Product from "./Product/Product.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Product />
      <SideBar />
    </section>
  );
}

export default Main;
