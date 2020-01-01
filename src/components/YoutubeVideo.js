/** @jsx jsx */
import { jsx } from "@emotion/core";

const YoutubeVideo = ({ src }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${src}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
export default YoutubeVideo;
