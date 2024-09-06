const SingleFeatureDisplay = ({
  filename,
  text,
  subtext,
  videoAlign = "left",
}: any) => {
  const textAlign = videoAlign === "left" ? "text-end" : "text-start";

  const VideoComponent = (
    <video
      className="mr-10 w-full rounded-[25px] border-4 border-darkIndigo"
      autoPlay
      muted
      loop
    >
      <source src={"/videos/" + filename} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  const TextComponent = (
    <div
      className={
        "mx-2 my-2 mt-[4rem] flex-col items-center text-grey " + textAlign
      }
    >
      <span className="my-auto text-[4rem] font-bold">{text}</span>
      <p className={"text-[2rem] font-normal"}>{subtext}</p>
    </div>
  );

  return (
    <div className="xs:flex-auto mt-[12rem] space-y-2 md:flex lg:flex xl:flex">
      <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
        {videoAlign === "left" ? VideoComponent : TextComponent}
      </div>
      <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
        {videoAlign === "left" ? TextComponent : VideoComponent}
      </div>
    </div>
  );
};

export default SingleFeatureDisplay;
