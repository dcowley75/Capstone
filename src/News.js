import React, { useEffect, useState } from "react";

let apiUrl = "https://api.nytimes.com/svc/movies/v2";
let apiKey = "iUiZqxYH4hsX2FXpb1FG2ZJadcC1Vc3r";
let type ="/reviews/picks.json";

function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}/${type}?api-key=${apiKey}`;
    fetch(api).then(response => response.json()).then(data => {
      setNews(data);
    })
  }, []);

  return (
    news && news.results.splice(0,3).map((article, index) => (
        <article key={article.link.url}>
            <img alt={index} height="100px" src={article.multimedia.src} />
            <a href={article.link.url}>{article.headline}</a>
        </article>
    ))
  );
}

export default News;
