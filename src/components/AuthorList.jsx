import { useSearch } from "../context";
import authorImage from "../assets/author-photo-not-found.jpg";
import Loader from "./Loader";
import AuthorCard from "./AuthorCard";
const AuthorList = () => {
  const { authors, loading, searchResultTitle } = useSearch();

  const authorCovers = authors.map((singleAuthor) => {
    return {
      ...singleAuthor,
      cover_img: singleAuthor.id
        ? `https://covers.openlibrary.org/a/olid/${singleAuthor.id}-L.jpg`
        : authorImage,
    };
  });
  if (loading) return <Loader />;
  return (
    <div className="py-[3rem] bg-[#f8f9fa]">
      <div className="max-w-[1200px] m-[0 auto] px-[2rem]">
        <div className="font-semibold pt-[18px] pb-[24px]">
          <h2>{searchResultTitle}</h2>
        </div>
        <div className="grid  gap-5 md:gap-12 sm:grid-cols-2  md:grid-cols-3">
          {authorCovers.map((item, index) => {
            return <AuthorCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AuthorList;
