import RevenueChart from "./RevenueChart";

export const revalidate = 60;

export default async function DashboardPage() {
  const res = await fetch("https://addis-eats-backend.onrender.com/menu", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to load aggregate sales data");
  }

  // Raw mock backend order data
  const rawOrders = [
    { id: "ORD-101", date: "2025-10-14", totalETB: 1450 },
    { id: "ORD-102", date: "2025-10-14", totalETB: 820 },
    { id: "ORD-103", date: "2025-10-15", totalETB: 2100 },
    { id: "ORD-104", date: "2025-10-16", totalETB: 1250 },
    { id: "ORD-105", date: "2025-10-16", totalETB: 980 },
    { id: "ORD-106", date: "2025-10-17", totalETB: 3100 },
    { id: "ORD-107", date: "2025-10-18", totalETB: 2400 },
  ];

  // Aggregate daily revenue and order counts on the server
  const dailySummaryMap = rawOrders.reduce((acc, order) => {
    if (!acc[order.date]) {
      acc[order.date] = { date: order.date, revenueETB: 0, orderCount: 0 };
    }
    acc[order.date].revenueETB += order.totalETB;
    acc[order.date].orderCount += 1;
    return acc;
  }, {});

  const dailySummary = Object.values(dailySummaryMap);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-[#fbf5ef] min-h-screen">
      <div>
        <span className="text-xs font-bold text-[#8c6820] tracking-widest uppercase">
          PERFORMANCE METRICS
        </span>
        <h1 className="font-serif text-3xl font-bold text-[#6b1f0a]">
          Mesob House Executive Analytics
        </h1>
      </div>

      {/* Render Chart Shell */}
      <RevenueChart data={dailySummary} />
    </div>
  );
}
