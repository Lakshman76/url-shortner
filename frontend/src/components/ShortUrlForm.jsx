import { useState } from 'react'
import axios from "axios";

const ShortUrlForm = () => {

  const [inputUrl, setInputUrl] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/url", { url: inputUrl })
          .then(() => {
            console.log("added successfully");
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      };
      const handleChnage = (e) => {
        setInputUrl(e.target.value);
      };
  return (
    <div>
        <h1>URL Shortner</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter your original URL</label>
        <input
          type="text"
          name="url"
          placeholder="https://example.com"
          onChange={handleChnage}
        />
        <button type="submit">Generate</button>
      </form>
    </div>
  )
}

export default ShortUrlForm