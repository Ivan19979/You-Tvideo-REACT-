import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Error } from "../layout/Error";
import { favoriteIds, searchVideoById, toggleFavorite } from "../config";

const VideoPlayer = ({ setSearch }) => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    searchVideoById(id).then((data) => {
      if (data.items) {
        setVideo(data.items[0]);
        setLoading(false);
        setSearch(
          data.items[0].snippet.tags
            ? data.items[0].snippet.tags.join(" ")
            : data.items[0].snippet.channelTitle
        );
      } else {
        setError(data.error.code);
      }
    });
    window.scrollTo(0, 0);
    return setLoading(true);
  }, [id, setSearch]);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <section className="video">
          <div className="container">
            <div className="video__player">
              <iframe
                className="video__iframe"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </div>
            {!loading ? (
              <>
                <div className="video__content">
                  <div className="video-container">
                    <h2 className="video__title">{video.snippet.title}</h2>
                    <button
                      id={video.id.videoId ? video.id.videoId : video.id}
                      className={`video__favorite favorite ${
                        favoriteIds.includes(
                          video.id.videoId ? video.id.videoId : video.id
                        )
                          ? "active"
                          : ""
                      }`}
                      data-video-id={video.id}
                      onClick={toggleFavorite}
                    >
                      <span className="video__no-active">Избранное</span>
                      <span className="video__active">В избранном</span>
                      <svg className="header__icon">
                        <use
                          className="star-o"
                          href="/image/sprite.svg#star-ob"
                        ></use>
                        <use
                          className="star"
                          href="/image/sprite.svg#star"
                        ></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="video__channel">{video.snippet.channelTitle}</p>
                <p className="video__info">
                  <span className="video__view">
                    {parseInt(video.statistics.viewCount).toLocaleString()}{" "}
                    просмотров
                  </span>
                  <br />
                  <span className="video__date">
                    Дата премьеры:{" "}
                    {video.snippet.publishedAt
                      .replace("T", " ")
                      .replace("Z", "")}
                  </span>
                  <br />
                  <br />
                </p>
                <p className="video__description">
                  {video.snippet.description.replaceAll("\n", "&#10;")}
                </p>
              </>
            ) : (
              <h1>Loading ...</h1>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export { VideoPlayer };
