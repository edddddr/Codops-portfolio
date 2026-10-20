export default function OrdersLoading() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-[#fbf5ef] min-h-screen animate-pulse">
      <div className="h-8 bg-[#e5d5c5] rounded-md w-64"></div>

      <div className="bg-white rounded-2xl border border-[#f0e2d3] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f4e7da] border-b border-[#e5d5c5]">
              <th className="p-4">
                <div className="h-4 bg-[#e5d5c5] rounded w-20"></div>
              </th>
              <th className="p-4">
                <div className="h-4 bg-[#e5d5c5] rounded w-28"></div>
              </th>
              <th className="p-4">
                <div className="h-4 bg-[#e5d5c5] rounded w-20"></div>
              </th>
              <th className="p-4">
                <div className="h-4 bg-[#e5d5c5] rounded w-24"></div>
              </th>
              <th className="p-4">
                <div className="h-4 bg-[#e5d5c5] rounded w-16"></div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0e2d3]">
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={row}>
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td className="p-4">
                  <div className="h-6 bg-gray-200 rounded-md w-16"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
