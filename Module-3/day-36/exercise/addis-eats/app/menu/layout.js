import SideBar from "./SideBar";

export default function layout({ children }) {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
}
