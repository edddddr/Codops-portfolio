import { useState } from "react";

function State() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");

  const handleCount = () => setCount(count + 1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // copy, then override
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.name, form.phone);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>+</button>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name="name" value={form.name} onChange={handleChange} />
        <br />
        <label>Phone: </label>
        <input name="phone" value={form.phone} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default State;
