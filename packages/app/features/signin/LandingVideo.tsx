import {useRef} from "react";
import {Video, ResizeMode} from "expo-av";

export const LandingVideo = ({height, src}) => {
  const video = useRef<any>(null);

  const onLoad = () => {
    video.current?.playAsync();
  };

  return (
    <Video
      ref={video}
      source={{
        uri: src,
      }}
      resizeMode={ResizeMode.COVER}
      isLooping
      style={{
        height,
        width: "100%",
      }}
      onLoad={onLoad}
    />
  );
};

export default LandingVideo;
