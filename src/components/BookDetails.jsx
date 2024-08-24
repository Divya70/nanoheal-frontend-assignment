import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import coverImage from "../assets/cover_not_found.jpg";
import { useSearch } from "../context";
const BookDetails = () => {
  const { id } = useParams();
  const { loading, setLoading } = useSearch();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    }
  });
  return <div>BookDetails</div>;
};

export default BookDetails;
