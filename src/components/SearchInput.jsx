import { Input } from "@nextui-org/react";
import { IconSearch } from "../assets/assets";
import { useSearch } from "../context";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SearchInput = () => {
  const { setSearchTerm, setSearchResultTitle, setAuthorSearchInput } =
    useSearch();
  console.log(useSearch());

  const searchText = useRef("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // To check if input search is used for bookSearch or authorSearch
  let isAuthor = pathname === "/author" || pathname === "/author/authorlist";
  // focus on input
  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = () => {
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setSearchResultTitle("Please Enter Something...");
    } else if (isAuthor) {
      setAuthorSearchInput(searchText.current.value);
      navigate("/author/authorlist");
    } else {
      setSearchTerm(searchText.current.value);
      navigate("/book");
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          width: "50%",
          padding: "20px",
        }}
      >
        <Input
          ref={searchText}
          clearable
          contentRight={
            <IconSearch
              className="w-10 h-10 text-black"
              fill="currentColor"
              size={20}
            />
          }
          placeholder="Search..."
          css={{
            "@xs": { width: "100%" },
            "@sm": { width: "75%" },
            "@md": { width: "50%" },
            "@lg": { width: "33%" },
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSubmit();
          }}
        />
        <IconSearch
          onClick={handleSubmit}
          className="w-10 h-10 text-black"
          fill="currentColor"
          size={20}
        />
      </div>
    </>
  );
};

export default SearchInput;
