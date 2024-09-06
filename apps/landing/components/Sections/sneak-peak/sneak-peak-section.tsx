import { useState } from "react";

const SneakPeakSection = () => {
  const [currentFeature, setCurrentFeature] = useState("links & folders");

  return (
    <section id="sneak" className="mx-auto mt-[20rem] animate-fade-in">
      {/* <span className="mt-12 mb-2 text-4xl font-medium">Sneak Peak</span>
      <div className="mt-8 animate-fade-in rounded-[30px] bg-transparent-white py-6 px-10  hover:border hover:border-solid hover:border-indigo">
        <Tabs
          currentFeature={currentFeature}
          setCurrentFeature={setCurrentFeature}
        />
        <Details currentFeature={currentFeature} />
      </div> */}
      {/* <div className="flex justify-between">
        <div className="w-5/12 text-[4rem] font-bold">
          Get access to your recent events/mails easily.
        </div>
        <div></div>
      </div> */}
    </section>
  );
};

export default SneakPeakSection;
