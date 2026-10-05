export default async function Dishlist() {
  const res = await fetch(
    "https://addis-eats-backend.onrender.com/menu/specials",
  );
  const data = await res.json();
  console.log(data.data);

  return (
    <>
      <h1>Data</h1>
      <ul className="flex items-center justify-between p-5">
        {data.data.map((d) => (
          <li key={d.id}>{d.slug}</li>
        ))}
      </ul>
    </>
  );
}
