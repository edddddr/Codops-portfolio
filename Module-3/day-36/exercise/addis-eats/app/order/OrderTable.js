import Link from "next/link";

export default function OrderTable({
  orders,
  currentSort,
  currentOrder,
  page,
  totalPages,
}) {
  const createSortUrl = (columnKey) => {
    const isSameColumn = currentSort === columnKey;
    const nextOrder = isSameColumn && currentOrder === "asc" ? "desc" : "asc";
    return `/orders?sort=${columnKey}&order=${nextOrder}&page=${page}`;
  };

  return (
    <div className="space-y-4">
      {/* Real HTML Table Markup */}
      <div className="bg-white rounded-2xl border border-[#f0e2d3] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#f4e7da] text-[#6b1f0a] border-b border-[#e5d5c5] font-bold">
              <th className="p-4">
                <Link
                  href={createSortUrl("id")}
                  className="hover:underline flex items-center gap-1"
                >
                  Order ID{" "}
                  {currentSort === "id"
                    ? currentOrder === "asc"
                      ? "▲"
                      : "▼"
                    : "↕"}
                </Link>
              </th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">
                <Link
                  href={createSortUrl("date")}
                  className="hover:underline flex items-center gap-1"
                >
                  Date{" "}
                  {currentSort === "date"
                    ? currentOrder === "asc"
                      ? "▲"
                      : "▼"
                    : "↕"}
                </Link>
              </th>
              <th className="p-4">
                <Link
                  href={createSortUrl("amount")}
                  className="hover:underline flex items-center gap-1"
                >
                  Total Amount{" "}
                  {currentSort === "amount"
                    ? currentOrder === "asc"
                      ? "▲"
                      : "▼"
                    : "↕"}
                </Link>
              </th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#f0e2d3]">
            {orders.map((ord) => (
              <tr key={ord.id} className="hover:bg-[#fbf5ef]">
                <td className="p-4 font-bold text-[#6b1f0a]">{ord.id}</td>
                <td className="p-4 text-[#2c1a11] font-medium">
                  {ord.customer}
                </td>
                <td className="p-4 text-[#6e5e54]">{ord.date}</td>
                <td className="p-4 text-[#6b1f0a] font-bold">
                  {ord.amount} ETB
                </td>
                <td className="p-4">
                  <span className="bg-[#e2f0e8] text-[#183e2b] px-2.5 py-1 rounded-md text-[10px] font-bold uppercase">
                    {ord.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Links */}
      <div className="flex justify-between items-center text-xs pt-2">
        <span className="text-[#6e5e54]">
          Page <strong className="text-[#6b1f0a]">{page}</strong> of{" "}
          <strong>{totalPages}</strong>
        </span>

        <div className="flex gap-2">
          {page > 1 ? (
            <Link
              href={`/orders?sort=${currentSort}&order=${currentOrder}&page=${page - 1}`}
              className="bg-white border border-[#e5d5c5] text-[#2c1a11] px-4 py-2 rounded-lg font-bold hover:bg-[#f4e7da]"
            >
              ← Previous
            </Link>
          ) : (
            <span className="bg-gray-100 border border-gray-200 text-gray-400 px-4 py-2 rounded-lg font-bold cursor-not-allowed">
              ← Previous
            </span>
          )}

          {page < totalPages ? (
            <Link
              href={`/orders?sort=${currentSort}&order=${currentOrder}&page=${page + 1}`}
              className="bg-white border border-[#e5d5c5] text-[#2c1a11] px-4 py-2 rounded-lg font-bold hover:bg-[#f4e7da]"
            >
              Next →
            </Link>
          ) : (
            <span className="bg-gray-100 border border-gray-200 text-gray-400 px-4 py-2 rounded-lg font-bold cursor-not-allowed">
              Next →
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
