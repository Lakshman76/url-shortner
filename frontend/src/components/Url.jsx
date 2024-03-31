import { useEffect, useState } from "react";
import axios from "axios";
import "./url.css";
import ShortUrlForm from "./ShortUrlForm";

const Url = () => {
  const [shortUrl, setShortUrl] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/test")
      .then((res) => {
        setShortUrl(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [shortUrl]);

  return (
    <div>
      <ShortUrlForm />
      <h1>Generated Short URL</h1>
      {shortUrl.map((url, index) => {
        return (
          <div key={index}>
            <h3>
              Original URL -{" "}
              <span className="original-url">{url.redirectURL}</span> short URL
              -{" "}
              <a href={`http://localhost:5000/${url.shortId}`}>
                <span className="short-url">
                  http://localhost:5000/{url.shortId}
                </span>
              </a>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Url;
