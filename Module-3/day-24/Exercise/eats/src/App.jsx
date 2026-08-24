import "./App.css";

function App() {
  const heading = <h1>Welcome to Addis Eats</h1>;
  const name = "Almaz";
  const price = 240;
  const ui = (
    <div>
      <h2>Selam, {name}!</h2>
      <p>Doro Wat: {price} ETB</p>
      <p>With tax: {price * 1.15} ETB</p>
    </div>
  );

  return (
    // Curly braces
    <>
      {heading}
      {name}
      {ui}
    </>
  );
}

export default App;
