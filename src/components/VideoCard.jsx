import { Link } from "react-router-dom";
import { favoriteIds, timeDuration, toggleFavorite } from "../config";

const VideoCard = ({ video }) => {
  return (
    <article className="video-card">
      <Link
        to={`/video/${video.id.videoId ? video.id.videoId : video.id}`}
        className="video-card__link"
      >
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          className="video-card__thumbnail"
        />
        <h3 className="video-card__title">{video.snippet.title}</h3>
        <p className="video-card__chanel">{video.snippet.channelTitle}</p>
        {video.contentDetails ? (
          <p className="video-card__duration">
            {!video.contentDetails.duration
              ? timeDuration(video.contentDetails.duration)
              : ""}
          </p>
        ) : (
          ""
        )}
      </Link>
      <button
        id={video.id.videoId ? video.id.videoId : video.id}
        className={`video-card__favorite favorite ${
          favoriteIds.includes(video.id.videoId ? video.id.videoId : video.id)
            ? "active"
            : ""
        }`}
        type="button"
        aria-label="added in favorite"
        onClick={toggleFavorite}
      >
        <svg className="search__icon">
          <use className="star-o" href="/image/sprite.svg#star-ob"></use>
          <use className="star" href="/image/sprite.svg#star"></use>
        </svg>
      </button>
    </article>
  );
};

export { VideoCard };
