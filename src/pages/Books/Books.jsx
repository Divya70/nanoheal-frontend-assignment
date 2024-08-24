import { Outlet } from "react-router-dom";
// import Header from "../../components/Header";

const Books = () => {
  return (
    <main>
      {/* <Header /> */}
      <Outlet />
    </main>
  );
};

export default Books;
