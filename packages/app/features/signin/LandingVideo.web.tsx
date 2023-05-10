export const LandingVideo = ({src, height}) => {
  return (
    <video autoPlay muted loop height={height}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default LandingVideo;
