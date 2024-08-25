import {
  useCallback,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { AUTHOR_URL, BOOKS_URL } from "./utils/constant";

const BookContext = createContext();
// eslint-disable-next-line react/prop-types
const BookProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("All your favorite books");
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResultTitle, setSearchResultTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [authorSearchInput, setAuthorSearchInput] = useState("");
  // fetch the books data from api
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BOOKS_URL}?bookName=${searchTerm}`);
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

  // fetch Author Data from API
  const getAuthors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${AUTHOR_URL}?authorName=${authorSearchInput}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const { docs } = data;
      if (docs) {
        let newAuthor = docs.map((singleAuthor) => {
          const { key, name, top_subjects, top_work, work_count } =
            singleAuthor;
          return {
            id: key,
            name: name,
            subjects: top_subjects,
            top_work: top_work,
            work_count: work_count,
          };
        });
        setAuthors(newAuthor);
        if (newAuthor.length > 1) {
          setSearchResultTitle("Your Search Result");
        } else {
          setSearchResultTitle("No Search result found!");
        }
      } else {
        setBook([]);
        setSearchResultTitle("No Search result found!");
      }

      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }, [authorSearchInput]);

  //Call fetchbooks function
  useEffect(() => {
    if (authorSearchInput) {
      getAuthors();
    } else if (searchTerm) {
      fetchBooks();
    }
  }, [searchTerm, fetchBooks, authorSearchInput, getAuthors]);

  return (
    <BookContext.Provider
      value={{
        loading,
        setLoading,
        book,
        setSearchTerm,
        searchResultTitle,
        setSearchResultTitle,
        authorSearchInput,
        setAuthorSearchInput,
        authors,
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
