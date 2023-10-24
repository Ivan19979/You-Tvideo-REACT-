import { useEffect, useState } from "react";
import { VideoCard } from "./VideoCard";
import { Error } from "../layout/Error";
import { fetchTrendingVideos } from "../config";

const VideoList = ({ title }) => {
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTrendingVideos().then((data) => {
      if (data.items) {
        setVideoList(data.items);
      } else {
        setError(data.error.code);
      }
    });
  }, []);

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <section className="video_list">
          <div className="container">
            <h2 className="video-list__title">{title}</h2>
            <ul className="video-list__items">
              {videoList ? (
                videoList.map((video) => (
                  <li className="video-list__item" key={video.id}>
                    <VideoCard video={video} />
                  </li>
                ))
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

export { VideoList };
