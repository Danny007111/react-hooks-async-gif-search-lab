import React, {useEffect, useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [change, setChange] = useState(`goku`)
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${change}&api_key=0RA4g3XH78ARBlXaY2YZeSyxlp8BY0dE&rating=g&limit=3`)
        .then((r) => r.json())
        .then(({data}) => {
            const newGifs = data.map((gif) => gif.images.original.url);
            setGifs(newGifs);
        })
    }, [change])

  return (
    <div>
      <GifList gifs={gifs}/>
      <GifSearch onSubmitChange={setChange} />
    </div>
  );
}

export default GifListContainer;