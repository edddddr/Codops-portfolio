import "./App.css";
import Dish from "./Dishes.jsx";

function App() {
  return (
    <div>
      <h1>Addis Eats</h1>
      <p>Order great food across Addis.</p>
      <Dish name="Shiro" price={120} />;
    </div>
  );
}
export default App;
