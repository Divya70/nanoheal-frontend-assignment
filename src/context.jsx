import {
  useCallback,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { BOOKS_URL } from "./utils/constant";

const BookContext = createContext();
// eslint-disable-next-line react/prop-types
const BookProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("All your favorite books");
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResultTitle, setSearchResultTitle] = useState("");

  // fetch the books data from api
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BOOKS_URL}${searchTerm}`);
      const bookData = await response.json();
      const { docs } = bookData;
      console.log("bookData", docs);
      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBook(newBooks);
        if (newBooks.length > 1) {
          setSearchResultTitle("Your Search Results");
        } else {
          setSearchResultTitle("No Search Results Found!");
        }
      } else {
        setBook([]);
        setSearchResultTitle("No Search Results Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  }, [searchTerm]);

  //Call fetchbooks function
  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <BookContext.Provider
      value={{
        loading,
        setLoading,
        book,
        setSearchTerm,
        searchResultTitle,
        setSearchResultTitle,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(BookContext);
};

export { BookProvider, BookContext };
