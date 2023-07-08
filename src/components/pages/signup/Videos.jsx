// import { Link } from "react-router-dom";
// import useVideoList from "../../../hooks/useVideoList";
// import Video from "./Video";

// export default function Videos() {
//   const { loading, error, videos } = useVideoList();

//   return (
//     <div>
//       {videos.length > 0 &&
//         videos.map((video, index) => (
//           <Link key={`${video.youtubeID}-${index}`} to={`/videos/${video.id}`}>
//             <Video title={video.title} id={video.youtubeID} noq={video.noq} />
//           </Link>
//         ))}
//       {!loading && videos.length === 0 && <div>No Data Found</div>}
//       {error && <div>There was an error</div>}
//       {loading && <div>Loading...</div>}
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import useVideoList from "../../../hooks/useVideoList";
import Video from "./Video";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 ? (
        <InfiniteScroll
          dataLength={videos.length}
          loader="Loading..."
          hasMore={hasMore}
          next={() => setPage(page + 6)}
        >
          {videos.map((video, index) =>
            video.noq > 0 ? (
              <Link
                key={`${video.youtubeID}-${index}`}
                to={`/quiz/${video.youtubeID}`}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                key={video.youtubeID}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      ) : (
        <div>No Data Found</div>
      )}
      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {error && <div>There was an error</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
