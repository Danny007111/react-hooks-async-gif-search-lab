import React, {useState} from "react";

function GifSearch({ onSubmitChange }) {
    const [query, setQuery] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      onSubmitChange(query);
    }
  
    function handleChange(event) {
      setQuery(event.target.value);
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="search">Enter a Search Term:</label>
            <input
              id="search"
              type="text"
              value={query}
              onChange={handleChange}
            />
          </div>
          <button type="submit" >
            Find Gifs
          </button>
        </form>
      </div>
    );
  }

export default GifSearch;