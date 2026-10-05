import Sidebar from "./SideBar";

export default function layout({ children }) {
  return (
    <div className="flex min-h-screen ">
      {/* Persistent Sidebar Component */}
      <Sidebar />

      {/* Dynamic Content Area (Swaps on navigation) */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
