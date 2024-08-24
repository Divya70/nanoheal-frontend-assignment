import { Outlet, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import BookDetails from "./components/BookDetails";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="book/:bookId" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
