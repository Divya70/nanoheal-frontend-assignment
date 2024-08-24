import { Route, Routes } from "react-router-dom";
// import Book from "./components/Book";
import BookDetails from "./components/BookDetails";
import Books from "./pages/Books/Books";
import BookList from "./components/BookList";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book" element={<BookList />} />
        <Route path="book/:bookId" element={<BookDetails />} />
        {/* <Route path/> */}
      </Routes>
    </>
  );
}

export default App;
