import React from "react";
import Header from "../../Component/Header/Header";
import "./Article.css";
import ArticleTile from "../../Component/ArticleTile/ArticleTile";
import { useState, useEffect } from "react";
import { getNews } from "../NewsPage/action";
import { truncateText } from "../../utils/truncate";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const Article = () => {
  useEffect(() => {
    document.title = "Newsroom"; // Change the window title here
  }, []);
  const [news, setNews] = useState([]);
  function formatDate(dateString) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  }
  const [Heading, setHeading] = useState(null);
  const fetchdata = async () => {
    try {
      const data = await getNews();

      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
    console.log(news);
  }, []);

  return (
    <div>
      <Header />

      <h2 className="article-header">Latest News today</h2>
      <div className="highlight-container">
        {news[0] && (
          <div className="highlight-parent">
            {news[0] && (
              <img
                className="placeholder"
                alt="foto orang"
                src={news[0].img_url}
              />
            )}
            <div className="text-info-headline">
              <div>
                <div class="category">Update</div>
                <Link
                  className="no-underline"
                  to={`/article/${news[0].news_id}`}
                >
                  <div class="headline">{news[0] && news[0].title}</div>
                </Link>
                <div class="text-headline">
                  {" "}
                  {news[0] && truncateText(news[0].bodycopy, 200)}
                </div>
              </div>
              <p className="category">
                {news[0] && formatDate(news[0].createAt)}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="container">
        <div className="article-tile-container">
          {news &&
            news.map((newsItem) => (
              <ArticleTile
                key={newsItem.id}
                headline={newsItem.title}
                date={formatDate(newsItem.createAt)}
                photo={newsItem.img_url}
                id={newsItem.news_id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
