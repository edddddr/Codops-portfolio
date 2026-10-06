import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  h-screen">
      <div>
        <Link href="/menu">Menu</Link> | <Link href="/cart">Cart</Link>
      </div>
      <div className="flex items-center justify-center h-96">
        <h1 className="text-4xl">Home</h1>
      </div>
    </div>
  );
}
