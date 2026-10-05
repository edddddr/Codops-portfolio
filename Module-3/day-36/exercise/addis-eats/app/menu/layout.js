import CategoryBar from "./CategoryBar";

export default function MenuLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* 2. Render persistently across dynamic dish sub-navigation targets */}
      <CategoryBar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
