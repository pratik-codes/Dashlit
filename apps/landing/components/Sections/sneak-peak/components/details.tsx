interface DetailsProps {
  currentFeature: string;
}

const imgMap: any = {
  "links & folders": {
    img: "links-dark.png",
    desc: "Create bookmarks, set of bookmarks to open in single click, manage tasks and focus mode",
  },
  Customizations: {
    img: "settings-dark.png",
    desc: "Plenty of customizations to tweak your home screen according to your preferences.",
  },
  "Add your Background": {
    img: "background-dark.png",
    desc: "Add your own background images or choose from the amazing dashlit library.",
  },
  "Change Quotes and focus mode": {
    img: "task-dark.png",
    desc: "Add your own quotes set focus mode and much more...",
  },
};

const Details = ({ currentFeature }: DetailsProps) => {
  const { img, desc } = imgMap[currentFeature];

  return (
    <div className="mt-12 mb-[2rem]">
      <div className="l:w-8/12 mx-auto mb-12 text-center text-xl font-medium md:w-8/12 xl:w-8/12 2xl:w-8/12">
        {desc}
      </div>
      <div className="w-full">
        <img className="rounded-[20px]" src={`/img/${img}`} alt="Hero image" />
      </div>
    </div>
  );
};

export default Details;
