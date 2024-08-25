import { useSearch } from "../context";
import coverImage from "../assets/cover_not_found.jpg";
import Loader from "./Loader";
import BooksCard from "./BooksCard";
// import Loader from "../co";
const BookList = () => {
  const { book, loading, searchResultTitle } = useSearch();
  const bookWithCovers = book.map((singleBook) => {
    return {
      ...singleBook,
      //Removing work to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImage,
    };
  });
  if (loading) return <Loader />;
  return (
    <section className="py-[3rem] bg-[#f8f9fa]">
      <div
        className="max-w-[1200px] m-[0 auto] px-8"
        style={{ margin: "auto" }}
      >
        <div className="font-semibold pt-[18px] pb-[24px]">
          <h2 className="text-center font-semibold text-xl">
            {searchResultTitle}
          </h2>
        </div>
        <div className="grid  gap-5 md:gap-12 sm:grid-cols-2  md:grid-cols-3 ">
          {bookWithCovers.slice(0, 30).map((item, index) => {
            return <BooksCard key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
