// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "AIzaSyCN3UaaUozhb8FVGQP8N3tulpGZwx9TDTQ";

const VIDEOS_URL = "https://www.googleapis.com/youtube/v3/videos";
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const favoriteIds = JSON.parse(localStorage.getItem("favoriteYT")) || [];

const toggleFavorite = ({ target }) => {
  const itemFavorite = target.closest(".favorite");
  if (itemFavorite) {
    const videoId = itemFavorite.id;
    if (favoriteIds.includes(videoId)) {
      favoriteIds.splice(favoriteIds.indexOf(videoId), 1);
      localStorage.setItem("favoriteYT", JSON.stringify(favoriteIds));
      itemFavorite.classList.remove("active");
    } else {
      favoriteIds.unshift(videoId);
      localStorage.setItem("favoriteYT", JSON.stringify(favoriteIds));
      itemFavorite.classList.add("active");
    }
  }
};

const timeDuration = (duration) => {
  var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match.slice(1).map((x) => {
    if (x) {
      return x.replace(/\D/, "");
    }
    return x;
  });

  var hours = parseInt(match[0]) || 0;
  var minutes = parseInt(match[1]) || 0;
  var seconds = parseInt(match[2]) || 0;

  return `${hours ? `${hours} ч` : ""}
  ${minutes ? `${minutes} мин` : ""}
  ${seconds ? `${seconds} сек` : ""}`;
};

const fetchTrendingVideos = async () => {
  const url = `${VIDEOS_URL}?part=contentDetails,id,snippet&chart=mostPopular&regionCode=RU&maxResults=12&key=${API_KEY}`;
  return await fetch(url).then((res) => res.json());
};

const fetchSearchVideos = async (search) => {
  const url = `${SEARCH_URL}?part=snippet&maxResults=12&q=${search
    .split(" ")
    .filter((el) => el.length > 3)
    .join(" | ")}&type=video&key=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

const searchVideoById = async (id) => {
  const url = `${VIDEOS_URL}?part=contentDetails,id,snippet,statistics&id=${id}&maxResults=12&key=${API_KEY}`;
  return await fetch(url).then((res) => res.json());
};

const fetchFavoriteVideos = async () => {
  try {
    if (favoriteIds.length === 0) {
      return { items: [] };
    }
    const url = new URL(VIDEOS_URL);

    url.searchParams.append("part", "contentDetails,id,snippet");
    url.searchParams.append("maxResults", 12);
    url.searchParams.append("id", favoriteIds.join(","));
    url.searchParams.append("key", API_KEY);
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};

export {
  fetchTrendingVideos,
  searchVideoById,
  fetchSearchVideos,
  timeDuration,
  fetchFavoriteVideos,
  toggleFavorite,
  favoriteIds,
};
