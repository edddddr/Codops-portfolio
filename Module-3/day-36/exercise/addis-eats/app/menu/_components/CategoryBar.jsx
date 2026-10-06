const categories = [
  { id: "all", name: "All Dishes" },
  { id: "Traditional Stews & Wat", name: "Traditional Stews & Wat" },
  { id: "Tibs & Grills", name: "Tibs & Grills" },
  { id: "Fasting & Vegan / Tsom", name: "Fasting & Vegan / Tsom" },
  {
    id: "Raw & Cured Delicacies / Kitfo",
    name: "Raw & Cured Delicacies / Kitfo",
  },
  { id: "Beverages & Tej", name: "Beverages & Tej" },
];

export default function CategoryBar({ activeCategory, onSelectCategory }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            backgroundColor: activeCategory === cat.id ? "#0070f3" : "#f0f0f0",
            color: activeCategory === cat.id ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
