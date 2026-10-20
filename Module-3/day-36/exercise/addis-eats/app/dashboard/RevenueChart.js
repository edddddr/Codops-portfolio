"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function RevenueChart({ data }) {
  const maxRevenue = Math.max(...data.map((d) => d.revenueETB), 1);

  return (
    <div className="space-y-10">
      {/* 1. Revenue Bar Chart */}
      <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-4">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2c1a11]">
            Daily Revenue Summary
          </h2>
          <p className="text-xs text-[#6e5e54]">
            Revenue expressed in Ethiopian Birr (ETB)
          </p>
        </div>

        {/* Fixed Height Chart Container */}
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e2d3" />
              <XAxis dataKey="date" stroke="#6e5e54" fontSize={12} />
              <YAxis
                stroke="#6e5e54"
                fontSize={12}
                tickFormatter={(val) => `${val} ETB`}
              />
              <Tooltip
                formatter={(val) => [`${val} ETB`, "Revenue"]}
                contentStyle={{
                  backgroundColor: "#f4e7da",
                  borderColor: "#e5d5c5",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="revenueETB" fill="#6b1f0a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Orders-Per-Day Line Chart */}
      <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-4">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2c1a11]">
            Order Volume Range: Oct 14 – Oct 18, 2025
          </h2>
          <p className="text-xs text-[#6e5e54]">
            Unit: Completed Orders per Day
          </p>
        </div>

        {/* Fixed Height Chart Container */}
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e2d3" />
              <XAxis dataKey="date" stroke="#6e5e54" fontSize={12} />
              <YAxis stroke="#6e5e54" fontSize={12} allowDecimals={false} />
              <Tooltip
                formatter={(val) => [`${val} orders`, "Daily Orders"]}
                contentStyle={{
                  backgroundColor: "#f4e7da",
                  borderColor: "#e5d5c5",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="orderCount"
                stroke="#183e2b"
                strokeWidth={3}
                dot={{ fill: "#183e2b", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Accessible Screen-Reader Data Table Fallback */}
      <div className="bg-white p-6 rounded-2xl border border-[#f0e2d3] shadow-sm space-y-4">
        <h3 className="font-serif text-lg font-bold text-[#2c1a11]">
          Tabular Sales & Volume Data (Screen Reader Accessible)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#f4e7da] text-[#6b1f0a] border-b border-[#e5d5c5]">
                <th className="p-3">Date</th>
                <th className="p-3">Total Revenue (ETB)</th>
                <th className="p-3">Total Orders (Count)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0e2d3]">
              {data.map((row) => (
                <tr key={row.date} className="hover:bg-[#fbf5ef]">
                  <td className="p-3 font-semibold text-[#2c1a11]">
                    {row.date}
                  </td>
                  <td className="p-3 text-[#6b1f0a] font-bold">
                    {row.revenueETB} ETB
                  </td>
                  <td className="p-3 text-[#6e5e54]">
                    {row.orderCount} orders
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
