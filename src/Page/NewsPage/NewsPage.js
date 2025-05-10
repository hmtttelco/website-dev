import React, { useEffect, useState } from "react";
import "./NewsPage.css";
import Header from "../../Component/Header/Header";
import { useParams } from "react-router-dom";
import { fullNews } from "./action";
import { formatedTime } from "../../utils/dateformat";
import { paragraphs } from "../../utils/paragraph";

const NewsPage = () => {
  const { id: newsId } = useParams();
  const [newsData, setNewsData] = useState(null); // Initialize with null to handle loading state
  const [loading, setLoading] = useState(true); // Loading state to show loading message

  const fetchdata = async () => {
    try {
      const data = await fullNews(newsId);
      console.log("Fetched data:", data); // Log the fetched data for debugging
      setNewsData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false once the fetch is complete
    }
  };

  useEffect(() => {
    fetchdata();
  }, [newsId]); // Add newsId to dependency array

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  if (!newsData) {
    return <div>No data found.</div>; // Handle case where no data is found
  }

  return (
    <div>
      <Header />
      <div className="news-header">
        <div className="category-component"></div>

        <div className="component-content-img">
          <div className="component-content">
            <p className="category">Update</p>
            <p className="date">{formatedTime(newsData[0].createAt)}</p>
          </div>
          <div className="component-content">
            <h1 className="news-headline">{newsData[0].title}</h1>
          </div>
          <img className="picture-image" src={newsData[0].img_url} alt="News" />
        </div>

        <div className="component-bodycopy">
          {/* <p className="bodycopy">{newsData[0].bodycopy}</p> */}

          {paragraphs(newsData[0].bodycopy).map((paragraph, index) => (
            <p key={index} className="bodycopy">
              {paragraph}
            </p>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
