import React, { useState } from "react";
import { Link } from "lucide-react";
import SearchLinks from "./SearchLinks";
import LinkComponent from "./LinkComponent";
import AddNewLinkModal from "./AddNewLinkDialog";

const links = [
  {
    title: "React Official Documentation",
    url: [
      "https://reactjs.org/docs/getting-started.html",
      "https://reactjs.org/docs/getting-started.html",
    ],
    type: "folder",
  },
  {
    title: "TypeScript Handbook",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    type: "documentation",
  },
  {
    title: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    type: "css",
  },
  {
    title: "Next.js Learn Course",
    url: "https://nextjs.org/learn",
    type: "tutorial",
  },
  {
    title: "GitHub",
    url: "https://github.com",
    type: "tool",
  },
];

const Links: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        onBlur={()=>setIsOpen(false)}
        className="group flex items-center text-white p-5 gap-3"
      >
        <Link size={20} />
        <span className="hidden group-hover:inline group-focus:inline text-md font-bold">
          Links
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-80 text-white p-4 rounded-lg shadow-lg bg-black"
          style={{ zIndex: 1000 }}
        >
          <div className="relative">
            <div className="flex flex-col space-y-4">
              <SearchLinks />
              <LinkComponent links={links} />
              <AddNewLinkModal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
