import { Route, Routes } from "react-router-dom";
// import Book from "./components/Book";
import BookDetails from "./components/BookDetails";
import Books from "./pages/Books/Books";
import BookList from "./components/BookList";
import Header from "./components/Header";
import Author from "./pages/Author/Author";
import AuthorList from "./components/AuthorList";
import AuthorDetails from "./components/AuthorDetails";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book" element={<BookList />} />
        <Route path="book/:bookId" element={<BookDetails />} />
        <Route path="/author" element={<Author />} />
        <Route path="author/authorlist" element={<AuthorList />} />
        <Route path="/author/authorlist/:id" element={<AuthorDetails />} />
      </Routes>
    </>
  );
}

export default App;
