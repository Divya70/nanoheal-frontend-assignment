import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Author = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Author;
