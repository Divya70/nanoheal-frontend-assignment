import { Link } from "react-router-dom";

const BooksCard = (book) => {
  const { id, cover_img, title, edition_count, first_publish_year } = book;
  return (
    <div className="px-[1rem] py-[2rem] rounded-md bg-white shadow-lg flex flex-col justify-between hover:shadow-2xl">
      <Link to={`/book/${id}`} {...book}>
        <div>
          <img
            src={cover_img}
            alt="cover"
            className="max-w-[80px] md:max-w-[150px] mr-auto ml-auto "
          />
        </div>
        <div className="mt-[2rem] text-center">
          <div className="leading-[1.4] mb-[0.8rem] font-bold text-[18px]">
            <span>{title}</span>
          </div>
          <div className="leading-[1.4] mb-[4px] text-[15px]">
            <span className="font-bold">Author: </span>
            <span>{[book.author].join(", ").toUpperCase()}</span>
          </div>

          <div className=" opacity-80 text-[15px]">
            <span className="font-bold">Total Editions: </span>
            <span>{edition_count}</span>
          </div>

          <div className="opacity-60 font-[italics] text-[14px] fs-15">
            <span className="font-bold">First Publish Year: </span>
            <span>{first_publish_year}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BooksCard;
