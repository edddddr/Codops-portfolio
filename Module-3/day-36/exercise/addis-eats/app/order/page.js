import OrderTable from "./OrderTable";
import { notFound } from "next/navigation";

export default async function OrdersPage({ searchParams }) {
  const {
    sort = "date",
    order = "desc",
    page = "1",
    state,
  } = await searchParams;

  // Force States for testing
  if (state === "empty") {
    notFound();
  }
  if (state === "error") {
    throw new Error("Simulated backend database error.");
  }

  const rawOrders = [
    {
      id: "ORD-1001",
      customer: "Abebe Bikila",
      date: "2025-10-14",
      amount: 1450,
      status: "Delivered",
    },
    {
      id: "ORD-1002",
      customer: "Genet Tadesse",
      date: "2025-10-15",
      amount: 2100,
      status: "Delivered",
    },
    {
      id: "ORD-1003",
      customer: "Kifle Woldemariam",
      date: "2025-10-16",
      amount: 820,
      status: "Delivered",
    },
    {
      id: "ORD-1004",
      customer: "Sara Tesfaye",
      date: "2025-10-17",
      amount: 3100,
      status: "In Transit",
    },
    {
      id: "ORD-1005",
      customer: "Dr. Kebede Wolde",
      date: "2025-10-18",
      amount: 1850,
      status: "Preparing",
    },
  ];

  // Sort Logic
  const sortedOrders = [...rawOrders].sort((a, b) => {
    let valA = a[sort] || a.id;
    let valB = b[sort] || b.id;

    if (valA < valB) return order === "asc" ? -1 : 1;
    if (valA > valB) return order === "asc" ? 1 : -1;
    return 0;
  });

  const currentPage = parseInt(page, 10) || 1;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-[#fbf5ef] min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs font-bold text-[#8c6820] tracking-widest uppercase">
            LIVE DISPATCH
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#6b1f0a]">
            Customer Order Ledger
          </h1>
        </div>

        {/* State Test Links */}
        <div className="flex gap-2 text-xs font-semibold">
          <a href="/orders?state=empty" className="text-gray-500 underline">
            Force Empty State
          </a>
          <span>•</span>
          <a href="/orders?state=error" className="text-red-500 underline">
            Force Error State
          </a>
        </div>
      </div>

      <OrderTable
        orders={paginatedOrders}
        currentSort={sort}
        currentOrder={order}
        page={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
