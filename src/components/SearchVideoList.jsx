import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { Error } from "../layout/Error";
import { fetchSearchVideos } from "../config";
import { useParams } from "react-router-dom";

const SearchVideoList = ({ title, search }) => {
  const { id } = useParams();
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSearchVideos(search).then((data) => {
      if (data.items) {
        setVideoList(data.items);
      } else {
        setError(data.error.code);
      }
    });
  }, [search]);

  return (
    <>
      {error && false ? (
        <Error />
      ) : (
        <section className="video_list">
          <div className="container">
            <h2 className="video-list__title">{title}</h2>
            <ul className="video-list__items">
              {videoList ? (
                videoList.map((video) => {
                  if (video.id.videoId !== id) {
                    return (
                      <li className="video-list__item" key={video.id.videoId}>
                        <VideoCard video={video} />
                      </li>
                    );
                  }
                  return null;
                })
              ) : (
                <h1>Loading...</h1>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export { SearchVideoList };
