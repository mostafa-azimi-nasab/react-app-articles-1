import Articles from "../articles/Articles";
import styled from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div className={styled.home}>
      {articles.map(result => (
        <Articles key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Home;
