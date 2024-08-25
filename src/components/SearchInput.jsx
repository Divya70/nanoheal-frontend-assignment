import { Input } from "@nextui-org/react";
import { useSearch } from "../context";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  const { setSearchTerm, setSearchResultTitle, setAuthorSearchInput } =
    useSearch();
  // const searchText = useRef("");
  const [input, setInput] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // To check if input search is used for bookSearch or authorSearch
  let isAuthor = pathname === "/author" || pathname === "/author/authorlist";

  const handleSubmit = () => {
    let tempSearchTerm = input.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setSearchResultTitle("Please Enter Something...");
    } else if (isAuthor) {
      setAuthorSearchInput(input);
      navigate("/author/authorlist");
    } else {
      setSearchTerm(input);
      navigate("/book");
    }
    setInput("");
  };
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          width: "40%",
        }}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            clearable
            placeholder="Search..."
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
            className="sm:w-full"
          />
          <FaSearch
            onClick={handleSubmit}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            className="text-black"
            fill="currentColor"
            size={20}
          />
        </div>
      </div> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          width: "100%",
          maxWidth: "600px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100% ",
          }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            clearable
            placeholder="Search..."
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
            className="sm:w-full"
          />
          <FaSearch
            onClick={handleSubmit}
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            className="text-black"
            fill="currentColor"
            size={20}
          />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
